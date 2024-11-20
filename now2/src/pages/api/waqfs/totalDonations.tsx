// pages/api/waqfs/totalDonations.ts
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

  if (req.method === "GET") {
    try {
      const totalRaised = await prisma.waqf.aggregate({
        _sum: {
          totalRaised: true,
        },
      });

      return res.status(200).json({ totalRaised: totalRaised._sum.totalRaised || 0 });
    } catch (error) {
      console.error("Error fetching total donations:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
