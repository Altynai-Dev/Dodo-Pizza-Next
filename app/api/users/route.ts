import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

//the function will be called each time a request is made to /api/users
export async function GET(){
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    const {password, ...user} = await prisma.user.create({data})
    return NextResponse.json(user)
}