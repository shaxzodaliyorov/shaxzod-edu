import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
	const token = req.cookies.get('token');
	if (token && req.nextUrl.pathname == '/auth') {
		const signinUrl = new URL('/', req.url);
		return NextResponse.redirect(signinUrl);
	} else if (
		(!token && req.nextUrl.pathname.startsWith('/security')) ||
		(!token && req.nextUrl.pathname.startsWith('/profile')) || (!token && req.nextUrl.pathname.startsWith('/admin'))
	) {
		const signinUrl = new URL('/', req.url);
		return NextResponse.redirect(signinUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/auth', '/security/:path*', '/profile/:path*', '/admin/:path*'],
};
