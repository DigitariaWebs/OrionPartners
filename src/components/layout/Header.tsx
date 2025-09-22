'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";
import { useModal } from "../providers/ModalProvider";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();
  const { openModal } = useModal();
  const servicesRef = useRef<HTMLDivElement>(null);

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

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
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
    },
    {
      id: "comptabilite-certification",
      name: "Comptabilité & certification",
      description: "Gestion comptable et reporting financier",
    },
    {
      id: "etudes-recherches",
      name: "Études et recherches",
      description: "Analyses et études de marché",
    },
  ];

  const isActive = (path: string) => {
    if (path === "#accueil")
      return pathname === "/" || pathname === "/#accueil";
    if (path === "/blog")
      return pathname === "/blog" || pathname.startsWith("/blog/");
    return pathname.includes(path);
  };

  const handleServiceClick = (serviceId: string, serviceName: string) => {
    setIsServicesOpen(false);

    // If not on home page, navigate to home first
    if (pathname !== "/") {
      window.location.href = `/#services`;
      return;
    }

    // Scroll to services section
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });

      // After scrolling, open the modal
      setTimeout(() => {
        openModal("service", { serviceId, serviceName });
      }, 800);
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
      style={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "var(--color-white)",
        boxShadow: isScrolled ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="container mx-auto px-10 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logos/Logo.png"
              alt="Orion Conseil Logo"
              width={460}
              height={440}
              priority
              className="w-auto h-15"
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
                    className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:scale-105 pb-1 cursor-pointer ${
                      pathname === "/" && currentHash === "#services"
                        ? "text-accent border-b-2 border-accent"
                        : "text-dark hover:text-primary"
                    }`}
                    style={{
                      color:
                        pathname === "/" && currentHash === "#services"
                          ? "var(--color-accent)"
                          : "var(--color-dark)",
                      borderBottomColor:
                        pathname === "/" && currentHash === "#services"
                          ? "var(--color-accent)"
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
                      style={{ backgroundColor: "var(--color-white)" }}
                    >
                      {services.map((service, index) => (
                        <button
                          key={service.id}
                          onClick={() =>
                            handleServiceClick(service.id, service.name)
                          }
                          className={`w-full text-left px-4 py-3 transition-colors duration-200 cursor-pointer ${
                            index !== services.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                          style={{
                            backgroundColor: "var(--color-white)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--color-dropdown-hover)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--color-white)";
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
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 pb-1 ${
                    isActive(item.href)
                      ? "text-accent border-b-2 border-accent"
                      : "text-dark hover:text-primary"
                  }`}
                  style={{
                    color: isActive(item.href)
                      ? "var(--color-accent)"
                      : "var(--color-dark)",
                    borderBottomColor: isActive(item.href)
                      ? "var(--color-accent)"
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
              onClick={() => openModal("consultation")}
              className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-white)",
              }}
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
