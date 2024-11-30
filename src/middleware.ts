import jwt from 'jsonwebtoken'; // Убедитесь, что библиотека установлена
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Исключение для статических файлов, таких как CSS, JS, изображения и т. д.
  if (
    pathname.startsWith('/_next') || // Next.js статические файлы
    pathname.startsWith('/static') || // Ваши статические файлы
    pathname.startsWith('/api/public') || // Открытые API
    pathname.endsWith('.ico') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js')
  ) {
    return NextResponse.next();
  }

  // Извлекаем токен из куков
  const accessToken = request.cookies.get('accessToken')?.value;

	console.log(accessToken);

  if (!accessToken) {
    // Если токен отсутствует, перенаправляем на логин
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Проверяем токен
    const decoded: any = jwt.decode(accessToken); // Ваш секретный ключ
		if (!decoded || !decoded.exp) {
			console.log('Структура токена неверная', decoded);
      // Если структура токена неверная, перенаправляем на логин
      return NextResponse.redirect(new URL('/login', request.url));
    }

		const now = Math.floor(Date.now() / 1000); // Текущее время в секундах
    if (decoded.exp < now) {
			console.log('Токен истёк', decoded);
      // Если токен истёк, перенаправляем на обновление токена
			const refreshToken = request.cookies.get('refreshToken')?.value;
			if (!refreshToken) {
				return NextResponse.redirect(new URL('/login', request.url));
			}

      const res = fetch('http://localhost:3000/api/auth/refresh', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refreshToken }),
        }).then((res) => console.log(res)).catch((err) => console.log('err'));
    }

    return NextResponse.next(); // Токен валиден
  } catch (error) {
    console.error('JWT Error:', error);

    // Другие ошибки токена, перенаправляем на логин
    return NextResponse.redirect(new URL('/login', request.url));
  }

}

export const config = {
  matcher: ['/', '/profile', '/rating', '/metrics'], // Применяем middleware ко всем маршрутам
};
