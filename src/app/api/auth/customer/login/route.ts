import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';

// Use the exact same secret key as your checkout route!
const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';
const secret = new TextEncoder().encode(JWT_SECRET);

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

    // 👇 4. THIS IS THE MISSING PIECE! Generate the JWT Token
    const token = await new SignJWT({ userId: customer.id, email: customer.email })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d') // Keep Wanst customers logged in for 7 days
      .sign(secret);

    // 5. Prepare the successful JSON response
    const response = NextResponse.json({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone || '',
      profileImage: customer.profile_image || ''
    });

    // 👇 6. Attach the token to the browser as a secure HTTP-Only cookie
    response.cookies.set({
      name: 'authToken',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    });

    return response;
    
  } catch (error: any) {
    console.error("Login Error:", error.message);
    return NextResponse.json({ error: "System error. Please try again." }, { status: 500 });
  }
}