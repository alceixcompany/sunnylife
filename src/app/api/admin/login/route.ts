import { NextResponse } from 'next/server';
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_DURATION_SECONDS,
  createAdminSessionToken,
} from '@/lib/adminSession';

export async function POST(request: Request) {
  const { email, password } = (await request.json()) as { email?: string; password?: string };
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!adminEmail || !adminPassword || !sessionSecret) {
    return NextResponse.json({ message: 'Yönetici hesabı henüz yapılandırılmamış.' }, { status: 503 });
  }

  if (email?.trim().toLowerCase() !== adminEmail.toLowerCase() || password !== adminPassword) {
    return NextResponse.json({ message: 'E-posta veya şifre hatalı.' }, { status: 401 });
  }

  const response = NextResponse.json({
    user: {
      uid: 'sunnylife-server-admin',
      email: adminEmail,
      displayName: 'Sunny Life Yönetici',
      isStaticAdmin: true,
      isDatabaseAdmin: false,
    },
  });
  response.cookies.set(ADMIN_SESSION_COOKIE, await createAdminSessionToken(adminEmail, sessionSecret), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: ADMIN_SESSION_DURATION_SECONDS,
  });
  return response;
}
