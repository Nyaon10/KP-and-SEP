import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    const users = await prisma.users.findMany({
      orderBy: { created_at: 'desc' }
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Hash the temporary password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.tempPassword || 'Wanst2026!', salt);

    const newUser = await prisma.users.create({
      data: {
        name: body.name,
        email: body.email,
        password_hash: hashedPassword, // Matches your DB column
        role: body.role,
        status: body.status || 'ACTIVE',
      }
    });

    return NextResponse.json(newUser);
  } catch (error: any) {
    console.error("User Creation Error:", error);
    return NextResponse.json({ error: "Email already exists or DB error" }, { status: 400 });
  }
}