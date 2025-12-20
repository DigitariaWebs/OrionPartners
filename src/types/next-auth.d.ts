import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: 'admin' | 'editor' | 'viewer';
    };
  }

  interface User {
    role: 'admin' | 'editor' | 'viewer';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: 'admin' | 'editor' | 'viewer';
    id: string;
  }
}



