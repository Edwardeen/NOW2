// pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'; // Adjust the path if necessary
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            username,
            password,
            email,
            frontName,
            familyName,
            dateofbirth,
            icNumber,
            phoneNumber,
            address,
            zipCode,
            province,
            city,
            country,
        } = req.body;

        // Check if user already exists
        const existingUser  = await prisma.user.findUnique({
            where: { username }
        });

        if (existingUser ) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                email,
                frontName,
                familyName,
                dateofbirth: dateofbirth ? new Date(dateofbirth) : null, // Save as a Date object
                icNumber: icNumber ? parseInt(icNumber) : null, // Convert to integer if needed
                phoneNumber,
                address,
                zipCode: zipCode ? parseInt(zipCode) : null, // Convert to integer if needed
                province,
                city,
                country,
            },
        });

        return res.status(201).json({ message: 'User  registered successfully', user });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}