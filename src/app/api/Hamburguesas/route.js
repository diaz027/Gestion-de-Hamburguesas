import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const mercaderia = await prisma.hamburguesas.findMany();
  return NextResponse.json(mercaderia);
}
