import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 1. Find the user by email
    const user = await prisma.users.findUnique({
      where: { email: email }
    });

    // 2. Check if user exists and is ACTIVE
    if (!user || user.status !== 'ACTIVE') {
      return NextResponse.json({ error: "Invalid credentials or account suspended" }, { status: 401 });
    }

    // 3. Compare the typed password with the hashed password in DB
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // 4. Update last_login timestamp
    await prisma.users.update({
      where: { id: user.id },
      data: { last_login: new Date() }
    });

    // 5. Return user data (In a real app, you'd set a Cookie/JWT here)
    return NextResponse.json({
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email
    });

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}