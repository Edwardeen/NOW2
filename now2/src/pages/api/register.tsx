// pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'; // Adjust the path if necessary
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    // All logic for POST is now within this try-catch
    try {
        const {
            username,
            password,
            email,
            frontName,
            familyName,
            dateofbirth, // Received as ISO string or null from client
            icNumber,    // Received as number or null from client
            phoneNumber,
            address,
            zipCode,     // Received as number or null from client
            province,
            city,
            country,
        } = req.body;

        if (!username || !password || !email) {
            return res.status(400).json({ error: 'Username, password, and email are required.' });
        }

        // Further specific error handling within this nested try-catch
        try {
            const existingUser = await prisma.user.findUnique({
                where: { username }
            });
            if (existingUser) {
                return res.status(400).json({ error: 'Username already exists' });
            }

            const existingEmail = await prisma.user.findFirst({
                where: { email }
            });
            if (existingEmail) {
                return res.status(400).json({ error: 'Email already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            let finalIcNumberForDb: string | null = null;
            if (icNumber !== null && icNumber !== undefined) {
                if (typeof icNumber === 'number' && !isNaN(icNumber)) {
                    finalIcNumberForDb = String(icNumber);
                } else {
                    // Client should send number or null (NaN becomes null)
                    // If it's somehow not a number here but also not null, it's an invalid type.
                    return res.status(400).json({ error: 'Invalid IC number format: expected a number from client.' });
                }
            }

            let finalZipCodeForDb: number | null = null;
            if (zipCode !== null && zipCode !== undefined) {
                if (typeof zipCode === 'number' && !isNaN(zipCode)) {
                    finalZipCodeForDb = zipCode;
                } else {
                    return res.status(400).json({ error: 'Invalid Zip code format: expected a number from client.' });
                }
            }

            let finalDateOfBirthForDb: Date | null = null;
            if (dateofbirth) { // dateofbirth is an ISO string or null
                const parsedDate = new Date(dateofbirth);
                if (isNaN(parsedDate.getTime())) {
                    return res.status(400).json({ error: 'Invalid date of birth format.' });
                }
                finalDateOfBirthForDb = parsedDate;
            }

            const user = await prisma.user.create({
                data: {
                    username,
                    password: hashedPassword,
                    email,
                    frontName,
                    familyName,
                    dateofbirth: finalDateOfBirthForDb,    // Date or null
                    icNumber: finalIcNumberForDb,         // String or null
                    phoneNumber,
                    address,
                    zipCode: finalZipCodeForDb,           // Number or null
                    province,
                    city,
                    country,
                },
            });

            return res.status(201).json({ message: 'User registered successfully', userId: user.id, username: user.username });

        } catch (error: any) {
            console.error('Registration Processing Error (raw):', error); // Log the raw error first

            // Attempt to identify Prisma unique constraint violation (P2002)
            if (error && error.code === 'P2002') {
                let field = 'field';
                if (error.meta && error.meta.target && Array.isArray(error.meta.target) && error.meta.target.length > 0) {
                    field = error.meta.target.join(', ');
                }
                const errorMessage = `An account with this ${field} already exists.`;
                return res.status(400).json({ error: errorMessage });
            }

            // Attempt to identify Prisma Accelerate connection issues or other Prisma Client known errors
            if (error && typeof error.message === 'string') {
                if (error.message.includes('fetch failed') || error.message.includes('Cannot fetch data from service')) {
                    console.error('Prisma Accelerate connection error details:', error.message);
                    return res.status(503).json({ error: 'Cannot connect to the database service at this time. Please try again later.', details: 'Service Unavailable' });
                }
            }
            
            // Check for other Prisma client known errors by looking at the error name or type if available
            if (error && error.name) {
                 if (error.name === 'PrismaClientKnownRequestError' || 
                     error.name === 'PrismaClientRustPanicError' || 
                     error.name === 'PrismaClientInitializationError' || 
                     error.name === 'PrismaClientValidationError') {
                     console.error(`Prisma Client Error (${error.name}): ${error.message}`, error.code ? `Code: ${error.code}` : '');
                     return res.status(500).json({ 
                         error: 'A database operational error occurred during registration. Please try again later.', 
                         details: error.code ? `Code: ${error.code}` : error.name 
                     });
                }
            }
            
            // Fallback for other errors caught in this block that weren't specifically handled above
            console.error('Unhandled error in registration processing block:', error.message || error);
            return res.status(500).json({ error: 'Error processing registration data. Please check server logs for more specific details.' });
        }
    } catch (outerError: any) {
        // This catches errors from req.body destructuring or other unexpected issues
        console.error('Outer Registration Handler Error:', outerError);
        return res.status(500).json({ error: 'An unexpected server error occurred.' });
    }
}