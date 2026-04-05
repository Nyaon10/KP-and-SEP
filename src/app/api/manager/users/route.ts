import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import bcrypt from 'bcrypt';

export async function GET() {
  try {
    const users = await prisma.users.findMany({
      orderBy: { created_at: 'desc' }
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 1. Securely hash the temporary password so the new staff member can actually log in!
    const rawPassword = data.tempPassword || 'Wanst2026!';
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    // 2. Create the user
    const newUser = await prisma.users.create({
      data: {
        // We completely removed the manual ID line! Prisma handles the UUID automatically now.
        name: data.name,
        email: data.email,
        password_hash: hashedPassword, // Matches your exact database column!
        role: data.role,
        status: data.status,
      }
    });
    
    return NextResponse.json(newUser);
  } catch (error: any) {
    console.error("POST Error:", error.message);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updates } = data;
    
    // Updates existing staff (handles both Edit form and Suspend button)
    const updatedUser = await prisma.users.update({
      where: { id },
      data: updates
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.users.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}