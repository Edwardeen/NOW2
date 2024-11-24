import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const {
    transactionTransfered,
    transactionTransformed,
    transactionDeposited,
    transactionScreened,
    transactionAmount,

  } = req.body;

  const transactionId = Number(id);


  const transaction =  prisma.transactions
  .update({
  where: { id: transactionId },
  data: {
      transactionTransfered,
      transactionTransformed,
      transactionDeposited,
      transactionScreened,
      transactionAmount,
  },
  include : {
    Waqf: {
      select: {
        waqfName: true,
      }
    },
    Landfills: {
      select: {
        landfillName: true,
      }
    },
  }
  })
    .then((data) => {
    
    if(transactionTransfered && transactionTransformed && transactionDeposited && transactionScreened ){
        
        console.log("add history for transaction ", data.id); 
        const history = prisma.history.create({
          data: {
            historyDate : data.transactionDate,
            historyDescription : data.transactionDescription,
            UserID : data.UserID,
            EntityID : data.EntityID,
            WaqfName : data.Waqf?.waqfName || "",
            LandfillName : data.Landfills?.landfillName || "",
            totalTransferred : data.transactionAmount,
            ScreenerID : data.ScreenerID,
            TransformerID : data.TransformerID,
          }
        })
        .then( async (data) => {
          console.log("history added for transaction ", data.id);
          // delete transaction
          await prisma.transactions.delete({
            where: { id: transactionId }
          })
          console.log("transaction deleted ", data.id);
          res.status(200).json(data);
        })
        .catch((error) => {
          console.error("Error adding history for transaction:", error);
          res.status(500).json({ error: "Failed to add history for transaction" });
        });
      }


    return res.status(200).json(data);
       

    })
   
    .catch((error) => {
    console.error("Error updating transaction:", error);
    res.status(500).json({ error: "Failed to update transaction" });
    });


  

    

  
}