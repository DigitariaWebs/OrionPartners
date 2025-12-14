"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FileText, LayoutDashboard, LogOut, User } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/admin/login");
  };

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Blog Posts",
      href: "/admin/posts",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background-secondary)] font-['Minion_Pro']">
      {/* Top Navigation Bar */}
      <nav className="bg-[var(--color-primary)] text-white shadow-md border-b border-[var(--color-primary-hover)]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/admin/dashboard" className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white tracking-tight">
                  Orion Partners
                </span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--color-accent)] text-white rounded shadow-sm">
                  ADMIN
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-sm text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium leading-none">
                    {session?.user?.name || session?.user?.email}
                  </span>
                  <span className="text-xs text-[var(--color-accent)] font-medium mt-0.5 uppercase tracking-wide">
                    {session?.user?.role}
                  </span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 border border-transparent hover:border-white/20"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-4rem)] bg-white shadow-xl z-10">
          <div className="p-4 mt-6">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
              Menu Principal
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "bg-[var(--color-primary)] text-white shadow-md"
                        : "text-gray-600 hover:bg-[var(--color-light)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        isActive
                          ? "text-[var(--color-accent)]"
                          : "text-gray-400 group-hover:text-[var(--color-primary)]"
                      }`}
                    />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="p-4 mt-auto border-t border-gray-100">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-[var(--color-primary)] bg-[var(--color-light)] hover:bg-gray-200 rounded-lg transition-colors border border-transparent hover:border-gray-300"
            >
              Voir le site public
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-[var(--color-background-secondary)] min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}


