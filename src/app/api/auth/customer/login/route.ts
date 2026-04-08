import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 1. Find the customer
    const customer = await prisma.customers.findUnique({
      where: { email }
    });

    if (!customer) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    // 2. Check if admin suspended them
    if (customer.status === 'SUSPENDED') {
      return NextResponse.json({ error: 'Your account has been suspended by management.' }, { status: 403 });
    }

    // 3. Verify password
    const isPasswordValid = await bcrypt.compare(password, customer.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    // 4. Return success (using 'customer' variable, not 'user'!)
    return NextResponse.json({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone || '',
      profileImage: customer.profile_image || '' // Safely passes the image
    });
    
  } catch (error: any) {
    console.error("Login Error:", error.message);
    return NextResponse.json({ error: "System error. Please try again." }, { status: 500 });
  }
}