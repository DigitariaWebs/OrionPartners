import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function getAuthSession() {
  return await auth();
}

export async function requireAuth() {
  const session = await getAuthSession();

  if (!session || !session.user) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Unauthorized. Please login.' },
        { status: 401 }
      ),
    };
  }

  return {
    authorized: true,
    session,
    user: session.user,
  };
}

export async function requireAdmin() {
  const authCheck = await requireAuth();

  if (!authCheck.authorized) {
    return authCheck;
  }

  if (authCheck.user!.role !== 'admin' && authCheck.user!.role !== 'editor') {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Forbidden. Admin or editor access required.' },
        { status: 403 }
      ),
    };
  }

  return {
    authorized: true,
    session: authCheck.session!,
    user: authCheck.user!,
  };
}

