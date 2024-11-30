import { refresh } from '@/server/auth'
import { serialize } from 'cookie'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Получаем тело запроса
    const { refreshToken } = await request.json();

		console.log(refreshToken);

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'Refresh token is required' },
        { status: 400 }
      );
    }

    // Процесс валидации и обновления токенов.
    const { newTokens } = await refresh(refreshToken);

    if (!newTokens) {
      return NextResponse.json(
        { error: 'Invalid refresh token' },
        { status: 401 }
      );
    }

    const accessTokenCookie = serialize('accessToken', newTokens.AccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
        sameSite: 'strict',
      })

      const refreshTokenCookie = serialize('refreshToken', newTokens.RefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30, // Например, 30 дней
        path: '/',
        sameSite: 'strict',
      })
      
      return NextResponse.json(
        { success: true, message: 'Refresh successful' },
        {
          headers: { 
            'Set-Cookie': accessTokenCookie + ', ' + refreshTokenCookie,
          }
        }
      )

  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'test2') {
      console.error('Refresh failed:', error.message)
      return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
    }

    console.error('API request error:', error instanceof Error ? error.message : String(error))
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
