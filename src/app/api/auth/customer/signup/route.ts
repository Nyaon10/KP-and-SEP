import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { name, email, password, phone } = await request.json();

    // 1. Check if the email already exists
    const existingCustomer = await prisma.customers.findUnique({
      where: { email }
    });

    if (existingCustomer) {
      return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 400 });
    }

    // 2. Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Save the new customer to the database
    const newCustomer = await prisma.customers.create({
      data: {
        id: crypto.randomUUID(),
        name,
        email,
        phone, // Added phone number here
        password: hashedPassword, 
        status: 'ACTIVE'
      }
    });

    return NextResponse.json({ success: true, id: newCustomer.id });
  } catch (error: any) {
    console.error("Signup Error:", error.message);
    return NextResponse.json({ error: "Failed to create account. Please try again." }, { status: 500 });
  }
}