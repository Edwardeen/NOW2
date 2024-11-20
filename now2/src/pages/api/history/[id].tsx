// pages/api/history/[userId].ts
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import prisma from "@/lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Retrieve the session
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { userId } = req.query;

  if (req.method === "GET") {
    try {
      // Ensure the user is requesting their own history
      if (session.user.id !== userId) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const history = await prisma.transactions.findMany({
        where: { UserID: parseInt(userId as string) },
        orderBy: { transactionDate: "desc" },
      });

      return res.status(200).json(history);
    } catch (error) {
      console.error("Error fetching history:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
