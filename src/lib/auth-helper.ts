import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';
import type { Session } from "next-auth";

// Define user type with role
interface AuthUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: "admin" | "editor" | "viewer";
}

interface AuthResult {
  authorized: boolean;
  response?: NextResponse;
  session?: Session | null;
  user?: AuthUser;
}

export async function getAuthSession() {
  return await auth();
}

export async function requireAuth(): Promise<AuthResult> {
  const session = await getAuthSession();

  if (!session || !session.user) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      ),
    };
  }

  return {
    authorized: true,
    session,
    user: session.user as AuthUser,
  };
}

export async function requireAdmin(): Promise<AuthResult> {
  const authCheck = await requireAuth();

  if (!authCheck.authorized) {
    return authCheck;
  }

  const userRole = authCheck.user?.role;
  if (userRole !== 'admin' && userRole !== 'editor') {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      ),
    };
  }

  return {
    authorized: true,
    session: authCheck.session,
    user: authCheck.user,
  };
}



