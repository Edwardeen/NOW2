import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "@/lib/prisma";

export const checkTransactionMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void // Adjust to work in the Next.js middleware structure
) => {
  // Retrieve session directly from request
  const session = await getSession({ req });

  // If no session, return Unauthorized
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Extract user information from session
  const userId = Number(session.user.id); // Assuming session.user.id is a number
  const userType = session.user.type; // Assuming session.user.type is a string

  // Validate transaction request data
  const { transactionDate, transactionAmount, transactionType, LandfillsID, WaqfID } = req.body;

  if (!transactionDate || !transactionAmount || !transactionType || !LandfillsID || !WaqfID) {
    return res
      .status(400)
      .json({ error: "Missing required fields: transactionDate, transactionAmount, transactionType, LandfillsID, or WaqfID" });
  }

  // Proceed to the next middleware or handler
  return next();
};
