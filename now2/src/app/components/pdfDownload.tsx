import { PDFDocument, rgb } from 'pdf-lib';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createHistoryPdf(userId: number) {
  // Fetch the user's session
  const session = await getSession();
  if (!session) {
    throw new Error('User  is not logged in');
  }

  const userType = session.user.type; // 'user' or 'entity'

  // Fetch history data based on the userId
  const historyRecords = await prisma.history.findMany({
    where: {
      UserID: userId,
    },
    include: {
        
      User: true,
      Entity: true,
      Waqf: true,
      Landfills: true,
      Screener: true,
      Transformer: true,
    },
  });

  // Fetch user or entity details based on userType
  let userDetails;
  if (userType === 'user') {
    userDetails = await prisma.user.findUnique({
      where: { id: userId },
    });
  } else if (userType === 'entity') {
    userDetails = await prisma.entity.findUnique({
      where: { id: userId },
    });
  }

  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { width, height } = page.getSize();

  // Draw the title
  page.drawText('History Records', {
    x: 50,
    y: height - 50,
    size: 24,
    color: rgb(0, 0, 0),
  });

  // Draw user type checkbox
  const checkboxX = 50;
  const checkboxY = height - 100;
  const checkboxSize = 15;

  if (userType === 'user') {
    page.drawRectangle({
      x: checkboxX,
      y: checkboxY,
      width: checkboxSize,
      height: checkboxSize,
      color: rgb(0.5, 0.5, 0.5), // Checked box
    });
    page.drawText('Individual', {
      x: checkboxX + checkboxSize + 5,
      y: checkboxY,
      size: 12,
      color: rgb(0, 0, 0),
    });
  } else if (userType === 'entity') {
    page.drawRectangle({
      x: checkboxX,
      y: checkboxY,
      width: checkboxSize,
      height: checkboxSize,
      color: rgb(0.5, 0.5, 0.5), // Checked box
    });
    page.drawText('Organization / Company', {
      x: checkboxX + checkboxSize + 5,
      y: checkboxY,
      size: 12,
      color: rgb(0, 0, 0),
    });
  }

  // Draw user or entity details
  let detailsYPosition = height - 130; // Start below the checkbox
  if (userType === 'user' && userDetails) {
    const user = userDetails as { 
      frontName: string | null; 
      familyName: string | null; 
      email: string; 
      phoneNumber: string | null; 
      address: string | null; 
    };
    
    page.drawText(`User  Details:`, {
      x: 50,
      y: detailsYPosition,
      size: 14,
      color: rgb(0, 0, 0),
    });
    detailsYPosition -= 20;
    page.drawText(`Name: ${user.frontName || ''} ${user.familyName || ''}`, {
      x: 50,
      y: detailsYPosition,
      size: 12,
      color: rgb(0, 0, 0),
    });
    detailsYPosition -= 20;
 page.drawText(`Email: ${user.email}`, {
      x: 50,
      y: detailsYPosition,
      size: 12,
      color: rgb(0, 0, 0),
    });
    detailsYPosition -= 20;
    page.drawText(`Phone: ${user.phoneNumber || 'N/A'}`, {
      x: 50,
      y: detailsYPosition,
      size: 12,
      color: rgb(0, 0, 0),
    });
    detailsYPosition -= 20;
    page.drawText(`Address: ${user.address || 'N/A'}`, {
      x: 50,
      y: detailsYPosition,
      size: 12,
      color: rgb(0, 0, 0),
    });
  } else if (userType === 'entity' && userDetails) {
    const entity = userDetails as { 
      companyName: string | null; 
      companyEmail: string | null; 
      companyPhoneNumber: string | null; 
      companyAddress: string | null; 
    };
    
    page.drawText(`Entity Details:`, {
      x: 50,
      y: detailsYPosition,
      size: 14,
      color: rgb(0, 0, 0),
    });
    detailsYPosition -= 20;
    page.drawText(`Company Name: ${entity.companyName || 'N/A'}`, {
      x: 50,
      y: detailsYPosition,
      size: 12,
      color: rgb(0, 0, 0),
    });
    detailsYPosition -= 20;
    page.drawText(`Company Email: ${entity.companyEmail || 'N/A'}`, {
      x: 50,
      y: detailsYPosition,
      size: 12,
      color: rgb(0, 0, 0),
    });
    detailsYPosition -= 20;
    page.drawText(`Company Phone: ${entity.companyPhoneNumber || 'N/A'}`, {
      x: 50,
      y: detailsYPosition,
      size: 12,
      color: rgb(0, 0, 0),
    });
    detailsYPosition -= 20;
    page.drawText(`Company Address: ${entity.companyAddress || 'N/A'}`, {
      x: 50,
      y: detailsYPosition,
      size: 12,
      color: rgb(0, 0, 0),
    });
  }

  // Check if there are any history records
  if (historyRecords.length === 0) {
    page.drawText('No history records found.', {
      x: 50,
      y: detailsYPosition - 20,
      size: 12,
      color: rgb(0, 0, 0),
    });
  } else {
    // Draw the history records in a table format
    let tableYPosition = detailsYPosition - 30; // Start below the user/entity details
    const tableStartX = 50;
    const rowHeight = 20; // Height per row
            if (tableYPosition < 0) {
            throw new Error("Too many records to fit in the PDF page.");
            }


    // Draw table header
    page.drawText('Date', { x: tableStartX, y: tableYPosition, size: 12, color: rgb(0, 0, 0) });
    page.drawText('Description', { x: tableStartX + 150, y: tableYPosition, size: 12, color: rgb(0, 0, 0) });
    page.drawText('Waqf', { x: tableStartX + 300, y: tableYPosition, size: 12, color: rgb(0, 0, 0) });
    page.drawText('Landfill', { x: tableStartX + 400, y: tableYPosition, size: 12, color: rgb(0, 0, 0) });
    tableYPosition -= rowHeight; // Move down for the next row

// Draw each history record
for (const record of historyRecords) {
    if (tableYPosition < rowHeight) {
      // Handle new page or truncation logic
      break;
    }
  
    page.drawText(record.historyDate.toISOString(), { x: tableStartX, y: tableYPosition, size: 12, color: rgb(0, 0, 0) });
    page.drawText(record.historyDescription || 'N/A', { x: tableStartX + 150, y: tableYPosition, size: 12, color: rgb(0, 0, 0) });
    page.drawText(record.Waqf?.waqfName || 'N/A', { x: tableStartX + 300, y: tableYPosition, size: 12, color: rgb(0, 0, 0) });
    page.drawText(record.Landfills?.landfillName || 'N/A', { x: tableStartX + 400, y: tableYPosition, size: 12, color: rgb(0, 0, 0) });
    tableYPosition -= rowHeight;
  }
  }  

  // Serialize the PDF document to bytes
  const pdfBytes = await pdfDoc.save();
  return pdfBytes; // Return the PDF bytes for further processing (e.g., sending as a response)
}

export { createHistoryPdf };