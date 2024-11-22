// pages/api/transactions.ts
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";
export default async function POST(req : NextApiRequest, res : NextApiResponse) {
 
    try {

        const {
            transactionDate,
            transactionAmount,
            transactionType,
            transactionDescription,
            LandfillsID,
            WaqfID,
            ScreenerID,
            TransformerID,
            userId,
            userType,
          } = req.body;
    
          console.log('req.body:', req.body);
      
      // Validate mandatory fields
      if (!transactionDate || !transactionType || !LandfillsID || !WaqfID) {
        return res.status(400).json({ error: "Missing required fields." });
      }

      
      console.log('validating related records');

      // Validate related records
      const landfillExists = await prisma.landfills.findUnique({ where: { id: parseInt(LandfillsID) } });
      if (!landfillExists) {
        return res.status(404).json({ error: "Landfill not found." });
      }
  
      const waqfExists = await prisma.waqf.findUnique({ where: { id: parseInt(WaqfID) } });
      if (!waqfExists) {
        return res.status(404).json({ error: "Waqf not found." });
      }

      console.log('creating transaction');
      const newTransaction = await prisma.transactions.create({
        data: {
          transactionAmount: transactionAmount,
          transactionType: transactionType,
          transactionStatus: "pending",
          transactionDescription: transactionDescription,
          totalScreened: 0,
          LandfillsID: parseInt(LandfillsID), // Ensure 1 exists in the Landfills table
          WaqfID: parseInt(WaqfID),      // Ensure 1 exists in the Waqf table
          UserID: 2,      // Ensure 1 exists in the User table
        },
      });
      

        console.log('Transaction created:', newTransaction);
      res.status(201).json({ message: "Transaction created successfully", transaction: newTransaction });
    } catch (error) {
      console.error("Error creating transaction:", error);
      res.status(500).json(error);
    }
    
  }

  