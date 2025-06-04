import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const transactionId = Number(id);

  // Extract whatever flags are present in the body for the update
  const { 
    transactionTransfered,
    transactionTransformed,
    transactionDeposited,
    transactionScreened,
    transactionAmount,
   } = req.body;

  try {
    const updatedTransaction = await prisma.transactions.update({
      where: { id: transactionId },
      data: {
        // Only include fields in the update if they were provided in the body
        ...(transactionTransfered !== undefined && { transactionTransfered }),
        ...(transactionTransformed !== undefined && { transactionTransformed }),
        ...(transactionDeposited !== undefined && { transactionDeposited }),
        ...(transactionScreened !== undefined && { transactionScreened }),
        ...(transactionAmount !== undefined && { transactionAmount }),
      },
      include: {
        Waqf: { select: { waqfName: true } },
        Landfills: { select: { landfillName: true } },
      },
    });

    // Now, check the state of the updatedTransaction from the database
    if (
      updatedTransaction.transactionScreened &&
      updatedTransaction.transactionDeposited &&
      updatedTransaction.transactionTransformed &&
      updatedTransaction.transactionTransfered
    ) {
      console.log("Transaction fully processed. Creating history for transaction ID:", updatedTransaction.id);
      try {
        const historyEntry = await prisma.history.create({
          data: {
            historyDate: updatedTransaction.transactionDate,
            historyDescription: updatedTransaction.transactionDescription,
            UserID: updatedTransaction.UserID,
            EntityID: updatedTransaction.EntityID,
            WaqfName: updatedTransaction.Waqf?.waqfName || "N/A",
            LandfillName: updatedTransaction.Landfills?.landfillName || "N/A",
            totalTransferred: updatedTransaction.transactionAmount, // This is the final amount
            ScreenerID: updatedTransaction.ScreenerID,
            TransformerID: updatedTransaction.TransformerID,
            // Consider adding original transactionId if your History model supports it
            // transactionId: updatedTransaction.id, 
          },
        });
        console.log("History entry created with ID:", historyEntry.id, "for original transaction ID:", updatedTransaction.id);

        await prisma.transactions.delete({
          where: { id: updatedTransaction.id },
        });
        console.log("Original transaction deleted:", updatedTransaction.id);

        return res.status(200).json(historyEntry); // Respond with the created history entry
      } catch (historyError) {
        console.error("Error during history creation or transaction deletion:", historyError);
        // If history creation/deletion fails, the original transaction is still updated.
        // We might want to return the updatedTransaction here with an error message, 
        // or a more specific error.
        return res.status(500).json({
          error: "Failed to finalize transaction and move to history. Transaction was updated but not moved.",
          updatedTransactionData: updatedTransaction // Optionally return the updated data
        });
      }
    } else {
      // Transaction updated but not yet ready for history
      console.log("Transaction updated but not yet fully finalized. ID:", updatedTransaction.id);
      return res.status(200).json(updatedTransaction);
    }
  } catch (error) {
    console.error("Error updating transaction:", error);
    // Check if it's a Prisma error for record not found (e.g., during update)
    if ((error as any).code === 'P2025') { // Prisma's error code for record not found
        return res.status(404).json({ error: `Transaction with ID ${transactionId} not found.` });
    }
    return res.status(500).json({ error: "Failed to update transaction" });
  }
}