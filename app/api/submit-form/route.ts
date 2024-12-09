import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    const formData = await prisma.formData.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json({ success: true, data: formData })
  } catch (error) {
    console.error('Error al guardar los datos del formulario:', error)
    return NextResponse.json({ success: false, error: 'Error al procesar la solicitud' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}


