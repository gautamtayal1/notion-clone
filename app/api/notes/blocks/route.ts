import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { content, pageId } : {content: string, pageId: number} = await req.json()
  const newBlock = await prisma.block.create({
    data: {
      content,
      pageId
    }
  })
  return NextResponse.json(newBlock)
}

export async function PUT(req: NextRequest) {
  const {id, content} : {id: number, content: string} = await req.json()
  const updatedBlock = await prisma.block.update({
    where: {
      id
    },
    data: {
      content
    }
  })
  return NextResponse.json(updatedBlock)
}

export async function DELETE(req: NextRequest) {
  const {id} : {id: number} = await req.json()
  const deletedBlock = await prisma.block.delete({
    where: {id}
  })
  return NextResponse.json(deletedBlock)
}