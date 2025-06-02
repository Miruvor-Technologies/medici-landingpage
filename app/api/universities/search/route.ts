import { NextResponse } from 'next/server'

const COLLEGE_SCORECARD_API_KEY = process.env.COLLEGE_SCORECARD_API_KEY

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${COLLEGE_SCORECARD_API_KEY}&school.name=${encodeURIComponent(query)}&fields=id,school.name,school.city,school.state&per_page=10`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch universities')
    }

    const data = await response.json()
    
    // Transform the data to a simpler format
    const universities = data.results.map((result: any) => ({
      id: result.id,
      name: result['school.name'],
      city: result['school.city'],
      state: result['school.state'],
      fullName: `${result['school.name']} - ${result['school.city']}, ${result['school.state']}`
    }))

    return NextResponse.json(universities)
  } catch (error) {
    console.error('Error fetching universities:', error)
    return NextResponse.json(
      { error: 'Failed to fetch universities' },
      { status: 500 }
    )
  }
} 