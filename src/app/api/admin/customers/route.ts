import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';
const secret = new TextEncoder().encode(JWT_SECRET);

// 🛡️ 1. The Security Gatekeeper
async function verifyAdmin(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;
  if (!token) return false;
  
  try {
    await jwtVerify(token, secret);
    return true; 
  } catch (error) {
    return false;
  }
}

export async function GET(request: NextRequest) {
  if (!(await verifyAdmin(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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

export async function PATCH(request: NextRequest) {
  if (!(await verifyAdmin(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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

export async function DELETE(request: NextRequest) {
  if (!(await verifyAdmin(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await request.json();
    
    await prisma.customers.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Customers DELETE Error:", error.message);
    
    // 🛡️ 2. Catch Foreign Key errors (e.g., trying to delete someone with order history)
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: "Cannot delete this customer because they have existing order history. Please suspend them instead." }, 
        { status: 409 } // 409 Conflict
      );
    }

    return NextResponse.json({ error: "Failed to delete customer" }, { status: 500 });
  }
}