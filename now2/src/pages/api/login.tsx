import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma'; // Adjust the path to your Prisma instance

interface LoginRequestBody {
  username: string;
  password: string;
}

async function validateCredentials(
  username: string,
  password: string,
  table: 'user' | 'entity'
): Promise<{ isValid: boolean; type?: 'user' | 'entity' }> {
  console.log('Validating credentials for table : ', table, 'user = ', username);
  if (table === 'user') {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      return isValid ? { isValid: true, type: 'user' } : { isValid: false };
    }
  } else if (table === 'entity') {
    const entity = await prisma.entity.findUnique({
      where: { companyUsername: username },
    });
    if (entity) {
      const isValid = await bcrypt.compare(password, entity.password);
      return isValid ? { isValid: true, type: 'entity' } : { isValid: false };
    }
  }
  return { isValid: false };
}

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { username, password } = req.body as LoginRequestBody;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // Validate against user and entity tables
    const userValidation = await validateCredentials(username, password, 'user');
    if (userValidation.isValid) {
      return res.status(200).json({ message: 'Login successful', type: userValidation.type });
    }

    const entityValidation = await validateCredentials(username, password, 'entity');
    if (entityValidation.isValid) {
      return res.status(200).json({ message: 'Login successful', type: entityValidation.type });
    }

    // If no valid credentials are found
    return res.status(401).json({ error: 'Invalid username or password' });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
