import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Basic validation
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create new donor
    const donor = await prisma.donor.create({
      data: {
        name: data.name,
        email: data.email,
      }
    })

    return NextResponse.json(donor)
  } catch (error) {
    console.error('Error creating donor:', error)
    return NextResponse.json(
      { error: 'Failed to create donor' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const donors = await prisma.donor.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(donors)
  } catch (error) {
    console.error('Error fetching donors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch donors' },
      { status: 500 }
    )
  }
}
