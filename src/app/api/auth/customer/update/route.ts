import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma'; // 5 dots up!

export async function PATCH(request: Request) {
  try {
    const data = await request.json();
    const { id, name, email, phone, profile_image } = data;

    if (!id) {
      return NextResponse.json({ error: "Customer ID is required" }, { status: 400 });
    }

    // Update the customer in the database
    const updatedCustomer = await prisma.customers.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        profile_image
      }
    });

    return NextResponse.json({ success: true, customer: updatedCustomer });
  } catch (error: any) {
    console.error("Profile Update Error:", error.message);
    return NextResponse.json({ error: "Failed to update profile." }, { status: 500 });
  }
}