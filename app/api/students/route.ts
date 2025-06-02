import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Basic validation
    if (!data.name || !data.email || !data.university || !data.fieldOfStudy || !data.degree || !data.fundsRequested || !data.country) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create new student
    const student = await prisma.student.create({
      data: {
        name: data.name,
        email: data.email,
        university: data.university,
        fieldOfStudy: data.fieldOfStudy,
        degree: data.degree,
        fundsRequested: parseFloat(data.fundsRequested),
        country: data.country
      }
    })

    return NextResponse.json(student)
  } catch (error) {
    console.error('Error creating student:', error)
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const students = await prisma.student.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(students)
  } catch (error) {
    console.error('Error fetching students:', error)
    return NextResponse.json(
      { error: 'Failed to fetch students' },
      { status: 500 }
    )
  }
}
