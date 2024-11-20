// pages/api/transactions.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import prisma from "@/lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Retrieve the session server-side
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "POST") {
    const {
      transactionDate,
      transactionAmount,
      transactionType,
      transactionDescription,
      LandfillsID,
      WaqfID,
      ScreenerID,
      TransformerID,
    } = req.body;

    // Validate required fields
    if (!transactionDate || !transactionAmount || !transactionType || !LandfillsID || !WaqfID) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    try {
      // Validate transactionAmount and transactionDate
      const amount = parseFloat(transactionAmount);
      if (isNaN(amount) || amount < 0) {
        return res.status(400).json({ error: "Invalid transaction amount." });
      }

      const date = new Date(transactionDate);
      if (isNaN(date.getTime())) {
        return res.status(400).json({ error: "Invalid transaction date." });
      }

      // Check if LandfillsID and WaqfID exist
      const landfillExists = await prisma.landfills.findUnique({
        where: { id: LandfillsID },
      });
      if (!landfillExists) {
        return res.status(404).json({ error: "Landfill not found." });
      }

      const waqfExists = await prisma.waqf.findUnique({
        where: { id: WaqfID },
      });
      if (!waqfExists) {
        return res.status(404).json({ error: "Waqf not found." });
      }

      // Create the transaction, associating it with the authenticated user
      const newTransaction = await prisma.transactions.create({
        data: {
          transactionDate: date,
          transactionAmount: amount,
          transactionType,
          transactionStatus: "Pending",
          transactionDescription: transactionDescription || null,
          transactionDeposited: false,
          transactionScreened: false,
          totalScreened: 0,
          transactionTransformed: false,
          transactionTransfered: false,
          UserID: parseInt(session.user.id),
          EntityID: session.user.type === "entity" ? parseInt(session.user.id) : null,
          WaqfID,
          LandfillsID,
          ScreenerID,
          TransformerID,
        },
      });

      return res.status(201).json({ message: "Transaction created successfully", transaction: newTransaction });
    } catch (error) {
      console.error("Error saving transaction:", error);
      return res.status(500).json({ error: "Internal server error." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed." });
  }
};

export default handler;
