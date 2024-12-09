import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const messages = await prisma.formData.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ success: true, messages })
  } catch (error) {
    console.error('Error al obtener los mensajes:', error)
    return NextResponse.json({ success: false, error: 'Error al procesar la solicitud' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

