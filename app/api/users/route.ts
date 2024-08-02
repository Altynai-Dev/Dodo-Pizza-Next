import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

//the function will be called each time a request is made to /api/users
export async function GET(){
    const users = await prisma.user.findMany()
    return NextResponse.json({
        users: ["user1", "user2", "user3"]
    })
}