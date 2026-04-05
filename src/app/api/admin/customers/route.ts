import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    const customers = await prisma.customers.findMany({
      orderBy: { created_at: 'desc' }
    });
    return NextResponse.json(customers);
  } catch (error: any) {
    console.error("Customers GET Error:", error.message);
    return NextResponse.json([], { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    const updatedCustomer = await prisma.customers.update({
      where: { id },
      data: { status }
    });
    return NextResponse.json(updatedCustomer);
  } catch (error: any) {
    console.error("Customers PATCH Error:", error.message);
    return NextResponse.json({ error: "Failed to update customer status" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.customers.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Customers DELETE Error:", error.message);
    return NextResponse.json({ error: "Failed to delete customer" }, { status: 500 });
  }
}