'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from "../ui/Button";
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'À propos', href: '#a-propos' },
    { name: 'Contact', href: '#contact' },
  ];

  const isActive = (path: string) => {
    if (path === '#accueil') return pathname === '/' || pathname === '/#accueil';
    return pathname.includes(path);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary"
      }`}
      style={{
        backgroundColor: isScrolled
          ? "rgba(var(--color-primary-rgb), 0.95)"
          : "var(--color-primary)",
        boxShadow: isScrolled
          ? "0 10px 15px -3px rgba(var(--color-primary-rgb), 0.1)"
          : "none",
      }}
    >
      <div className="container mx-auto px-10 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logos/Logo.png"
              alt="Orion Partners Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 pb-1 ${
                  isActive(item.href)
                    ? "text-accent border-b-2 border-accent"
                    : "text-white hover:text-accent"
                }`}
                style={{
                  color: isActive(item.href)
                    ? "var(--color-accent)"
                    : "var(--color-white)",
                  borderBottomColor: isActive(item.href)
                    ? "var(--color-accent)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = "var(--color-white)";
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button - Right */}
          <div className="hidden md:block">
              <Link href="/contact">
                <Button variant="secondary" size="md" className="font-medium">
                  Contactez-nous
                </Button>
              </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-white)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-accent-hover)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
