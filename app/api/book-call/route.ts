// app/api/book-call/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, date } = await request.json();

    const call = await prisma.call.create({
      data: {
        name,
        email,
        date: new Date(date),
      },
    });

    return NextResponse.json(
      { message: "Call booked successfully", call },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error booking call:", error);
    return NextResponse.json(
      { message: "Error booking call" },
      { status: 500 }
    );
  }
}
