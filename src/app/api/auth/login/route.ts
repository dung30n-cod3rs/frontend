import { signIn } from '@/server/auth'
import { serialize } from 'cookie'
import { NextRequest, NextResponse } from 'next/server'

  export async function POST(request: NextRequest) {
    try {
      const body = await request.json()
      console.log('Received login attempt:', body)

      const { email, password } = body

      const { tokens } = await signIn(email, password)

      console.log(tokens);

      const accessTokenCookie = serialize('accessToken', tokens.AccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
        sameSite: 'strict',
      })

      
      return NextResponse.json(
        { success: true, message: 'Login successful' },
        {
          headers: { 
            'Set-Cookie': accessTokenCookie,
          }
        }
      )
    } catch (error: unknown) {
      if (error instanceof Error && error.message === 'test') {
        console.error('Login failed:', error.message)
        return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
      }

      console.error('API request error:', error instanceof Error ? error.message : String(error))
      return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
    }
  }
