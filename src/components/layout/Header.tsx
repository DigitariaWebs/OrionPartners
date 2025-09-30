'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { usePathname, useRouter } from "next/navigation";
import { useModal } from "../providers/ModalProvider";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const { openModal } = useModal();
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    setCurrentHash(window.location.hash);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Handle clicking outside to close dropdown and mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigation = [
    { name: "Accueil", href: "/#accueil" },
    { name: "Services", href: "/#services", isDropdown: true },
    { name: "Blog", href: "/blog" },
    { name: "Notre équipe", href: "/notreequipe" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/#contact" },
  ];

  const services = [
    {
      id: "servicesconseils",
      name: "Services Conseils",
      description: "Conseil stratégique et opérationnel",
      pageLink: "/servicesconseils",
    },
    {
      id: "comptabilite-certification",
      name: "Comptabilité & certification",
      description: "Gestion comptable et reporting financier",
      pageLink: "/comptabilite-certification",
    },
    {
      id: "etudes-recherches",
      name: "Études et recherches",
      description: "Analyses et études de marché",
      pageLink: "/etudes-data-intelligence",
    },
  ];

  const isActive = (path: string) => {
    if (path === "#accueil")
      return pathname === "/" || pathname === "/#accueil";
    if (path === "/blog")
      return pathname === "/blog" || pathname.startsWith("/blog/");
    return pathname.includes(path);
  };

  const handleServiceClick = (pageLink: string) => {
    setIsServicesOpen(false);
    router.push(pageLink);
  };

  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    if (href.startsWith("/#")) {
      router.push(href);
    } else {
      router.push(href);
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
      style={{
        backgroundColor: "var(--color-background-secondary)",
        boxShadow: isScrolled ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="container mx-auto px-4 md:px-10 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logos/Logo.png"
              alt="Orion Conseil Logo"
              width={460}
              height={440}
              priority
              className="w-auto h-8 md:h-15"
            />
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) =>
              item.isDropdown ? (
                /* Services Dropdown */
                <div key={item.name} className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center gap-1 text-lg font-medium transition-all duration-300 hover:scale-105 pb-1 cursor-pointer ${
                      pathname === "/" && currentHash === "#services"
                        ? "text-primary border-b-2 border-primary"
                        : "text-dark hover:text-primary"
                    }`}
                    style={{
                      color:
                        pathname === "/" && currentHash === "#services"
                          ? "var(--color-primary)"
                          : "var(--color-dark)",
                      borderBottomColor:
                        pathname === "/" && currentHash === "#services"
                          ? "var(--color-primary)"
                          : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!(pathname === "/" && currentHash === "#services")) {
                        e.currentTarget.style.color = "var(--color-primary)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!(pathname === "/" && currentHash === "#services")) {
                        e.currentTarget.style.color = "var(--color-dark)";
                      }
                    }}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                      style={{
                        backgroundColor: "var(--color-background-secondary)",
                      }}
                    >
                      {services.map((service, index) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceClick(service.pageLink)}
                          className={`w-full text-left px-4 py-3 transition-colors duration-200 cursor-pointer ${
                            index !== services.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                          style={{
                            backgroundColor:
                              "var(--color-background-secondary)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--color-dropdown-hover)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--color-background-secondary)";
                          }}
                        >
                          <div
                            className="font-medium text-sm"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {service.name}
                          </div>
                          <div className="text-xs mt-1 text-gray-600">
                            {service.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Regular Navigation Link */
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium transition-all duration-300 hover:scale-105 pb-1 ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-dark hover:text-primary"
                  }`}
                  style={{
                    color: isActive(item.href)
                      ? "var(--color-primary)"
                      : "var(--color-dark)",
                    borderBottomColor: isActive(item.href)
                      ? "var(--color-primary)"
                      : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.color = "var(--color-primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.color = "var(--color-dark)";
                    }
                  }}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Contact Button - Right */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              className="font-medium"
              onClick={() => openModal("consultation")}
            >
              Contactez-nous
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-dark hover:text-primary transition-colors duration-300"
              style={{ color: "var(--color-dark)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-dark)";
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 right-0 z-40"
          style={{ backgroundColor: "var(--color-background-secondary)" }}
        >
          <div className="border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) =>
                item.isDropdown ? (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className="flex items-center justify-between w-full text-left text-sm font-medium py-2 border-b border-gray-100 transition-colors duration-200"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="pl-4 space-y-2">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => {
                              handleServiceClick(service.pageLink);
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                            className="block w-full text-left py-2 text-sm transition-colors duration-200"
                            style={{ color: "var(--color-primary)" }}
                          >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-gray-600 mt-1">
                              {service.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleMobileNavClick(item.href)}
                    className="block py-2 text-sm font-medium transition-colors duration-300"
                    style={{
                      color: isActive(item.href)
                        ? "var(--color-primary)"
                        : "var(--color-primary)",
                    }}
                  >
                    {item.name}
                  </Link>
                )
              )}

              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full font-medium"
                  onClick={() => {
                    openModal("consultation");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
