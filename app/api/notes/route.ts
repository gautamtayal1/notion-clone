import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"


export async function GET() {
  const pages = await prisma.page.findMany({
    include: {blocks: true}
  })
  return NextResponse.json(pages)
}

export async function POST(req: NextRequest) {
  const {title} : {title: string} = await req.json()
  const newPage = await prisma.page.create({
    data: {
       title,
    }
  })
  return NextResponse.json(newPage)
}

export async function PUT(req: NextRequest) {
  const {id, title} : {title: string, id: number} = await req.json()
  const updatedPage = await prisma.page.update({
    where :{id},
    data: {title}
  })
  return NextResponse.json(updatedPage)
}

export async function DELETE(req: NextRequest) {
  const {id} : { id: number } = await req.json()
  const deletedPage = await prisma.page.delete({
    where: {id}
  })
  return NextResponse.json(deletedPage)
}
