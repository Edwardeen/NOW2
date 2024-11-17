// pages/api/register-entity.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'; // Adjust the path if necessary
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            companyUsername,
            password,
            picFrontName,
            picFamilyName,
            picPhoneNumber,
            dateofbirth,
            companyName,
            companyAddress,
            companyPhoneNumber,
            companyZipCode,
            companyEmail,
            companyRegistrationNumber,
        } = req.body;

        // Check if company username already exists
        const existingEntity = await prisma.entity.findUnique({
            where: { companyUsername },
        });

        if (existingEntity) {
            return res.status(400).json({ error: 'Company username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new entity
        const entity = await prisma.entity.create({
            data: {
                companyUsername,
                password: hashedPassword,
                picFrontName,
                picFamilyName,
                picPhoneNumber,
                dateofbirth: dateofbirth ? new Date(dateofbirth) : null, // Save as Date object
                companyName,
                companyAddress,
                companyPhoneNumber,
                companyZipCode: companyZipCode ? parseInt(companyZipCode) : null, // Convert to integer
                companyEmail,
                companyRegistrationNumber,
            },
        });

        return res.status(201).json({ message: 'Entity registered successfully', entity });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}