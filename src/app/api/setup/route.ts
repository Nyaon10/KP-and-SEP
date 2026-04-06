import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Adjust the dots if needed
import bcrypt from 'bcryptjs'; // or 'bcrypt', depending on what you used in login

export async function GET() {
  try {
    // 1. Hash the default password securely
    const defaultPassword = 'admin123';
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    // 2. Create the Admin and Manager accounts
    await prisma.users.createMany({
      data: [
        {
          name: 'System Admin',
          email: 'admin@wanst.com',
          password_hash: hashedPassword,
          role: 'admin',
          status: 'ACTIVE'
        },
        {
          name: 'Store Manager',
          email: 'manager@wanst.com',
          password_hash: hashedPassword,
          role: 'manager',
          status: 'ACTIVE'
        }
      ],
      skipDuplicates: true // Prevents crashing if you refresh the page twice
    });

    return NextResponse.json({ 
      success: true, 
      message: "Accounts successfully injected into the database!",
      accounts: [
        { email: 'admin@wanst.com', password: defaultPassword, role: 'ADMIN' },
        { email: 'manager@wanst.com', password: defaultPassword, role: 'MANAGER' }
      ]
    });

  } catch (error: any) {
    console.error("Setup Error:", error.message);
    return NextResponse.json({ error: "Failed to set up accounts" }, { status: 500 });
  }
}