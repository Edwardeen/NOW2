// pages/api/finalize/transaction.tsx
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    try {
        const {
            // transactionDate will be set by the server to ensure consistency
            transactionAmount,
            transactionType,
            transactionDescription,
            LandfillsID: LandfillsIDString,
            WaqfID: WaqfIDString,
            // ScreenerID, // Not currently used in create, but available if needed later
            // TransformerID, // Not currently used in create, but available if needed later
            userId: userIdString, // Renamed to avoid confusion, will be parsed
            userType, // "user" or "entity"
        } = req.body;

        console.log('Received request to finalize transaction with body:', req.body);

        // Basic validation for absolutely required fields
        if (!transactionType || !LandfillsIDString || !WaqfIDString || !transactionAmount) {
            return res.status(400).json({ error: "Missing required fields: transactionType, LandfillsID, WaqfID, transactionAmount are required." });
        }
        
        // Validate and parse numeric IDs
        const LandfillsID = parseInt(LandfillsIDString, 10);
        if (isNaN(LandfillsID)) {
            return res.status(400).json({ error: "Invalid LandfillsID format. Must be a number." });
        }

        const WaqfID = parseInt(WaqfIDString, 10);
        if (isNaN(WaqfID)) {
            return res.status(400).json({ error: "Invalid WaqfID format. Must be a number." });
        }

        const parsedTransactionAmount = parseFloat(transactionAmount);
        if (isNaN(parsedTransactionAmount)) {
            return res.status(400).json({ error: "Invalid transactionAmount format. Must be a number." });
        }

        let UserIDForDb: number | null = null;
        let EntityIDForDb: number | null = null;
        let numericUserId: number | null = null;

        if (userIdString) {
            numericUserId = parseInt(userIdString, 10);
            if (isNaN(numericUserId)) {
                return res.status(400).json({ error: "Invalid userId format. Must be a number if provided." });
            }
        }

        // Perform DB operations within a nested try-catch for specific error handling
        try {
            // Validate related records
            const landfillExists = await prisma.landfills.findUnique({ where: { id: LandfillsID } });
            if (!landfillExists) {
                return res.status(404).json({ error: `Landfill with ID ${LandfillsID} not found.` });
            }

            const waqfExists = await prisma.waqf.findUnique({ where: { id: WaqfID } });
            if (!waqfExists) {
                return res.status(404).json({ error: `Waqf with ID ${WaqfID} not found.` });
            }

            // Validate User or Entity if userId and userType are provided
            if (numericUserId !== null && userType) {
                if (userType === "user") {
                    const userExists = await prisma.user.findUnique({ where: { id: numericUserId } });
                    if (!userExists) {
                        return res.status(404).json({ error: `User with ID ${numericUserId} not found.` });
                    }
                    UserIDForDb = numericUserId;
                } else if (userType === "entity") {
                    const entityExists = await prisma.entity.findUnique({ where: { id: numericUserId } });
                    if (!entityExists) {
                        return res.status(404).json({ error: `Entity with ID ${numericUserId} not found.` });
                    }
                    EntityIDForDb = numericUserId;
                } else {
                    return res.status(400).json({ error: "Invalid userType. Must be 'user' or 'entity' if userId is provided." });
                }
            } else if (numericUserId !== null && !userType) {
                 return res.status(400).json({ error: "userType is required if userId is provided." });
            } // If numericUserId is null, UserIDForDb and EntityIDForDb remain null, which is acceptable if the transaction doesn't require them.


            console.log('All validations passed. Creating transaction...');
            const newTransaction = await prisma.transactions.create({
                data: {
                    transactionDate: new Date(), // Set by server for consistency
                    transactionAmount: parsedTransactionAmount,
                    transactionType: transactionType,
                    transactionStatus: "PENDING", // Default status
                    transactionDescription: transactionDescription || null,
                    totalScreened: 0, // Default as per original, remove if not needed
                    LandfillsID: LandfillsID, 
                    WaqfID: WaqfID,      
                    UserID: UserIDForDb, 
                    EntityID: EntityIDForDb,
                    // ScreenerID and TransformerID are not included as per original logs, add if necessary
                },
            });

            console.log('Transaction created successfully:', newTransaction);
            return res.status(201).json({ message: "Transaction created successfully", transaction: newTransaction });

        } catch (error: any) {
            console.error('Error during transaction processing (database operations):', error);
            if (error.code === 'P2003') { // Foreign key constraint failed
                 return res.status(400).json({ error: 'Invalid reference to a related record. One of the provided IDs does not exist.', details: error.meta?.field_name || 'Foreign key constraint failed' });
            }
            // Handle other Prisma errors or generic errors
            return res.status(500).json({ error: 'Database error during transaction finalization.', details: error.message || 'Unknown database error' });
        }

    } catch (outerError: any) {
        console.error('Outer error in /api/finalize/transaction:', outerError);
        return res.status(500).json({ error: 'An unexpected server error occurred.', details: outerError.message || 'Internal Server Error' });
    }
}

  