import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // This path puts the file directly into your public/images folder
    const path = join(process.cwd(), 'public/images', file.name);
    await writeFile(path, buffer);
    
    console.log(`File uploaded to ${path}`);

    return NextResponse.json({ 
      success: true, 
      url: `/images/${file.name}` 
    });
  } catch (error) {
    console.error("Upload API Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}