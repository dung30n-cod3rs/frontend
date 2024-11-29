import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
	// Пропускаем запросы на .css файлы
	if (request.nextUrl.pathname.endsWith('.css')) {
			return NextResponse.next();
	}
	
	const response = NextResponse.rewrite(new URL('/login', request.url));
	return response;
}

export const config = {
  matcher: ['/', '/profile'],
}
