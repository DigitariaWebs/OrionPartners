'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const serviceKeyToTitle = (key: string) => {
  const map: Record<string, string> = {
    "servicesconseils": "Services Conseils",
    "comptabilite-certification": "Comptabilité & certification",
    "etudes-recherches": "Études et recherches",
  };
  return map[key] || "";
};

const serviceKeyToUrl = (key: string) => {
  const map: Record<string, string> = {
    "servicesconseils": "/servicesconseils",
    "comptabilite-certification": "/comptabilite-certification",
    "etudes-recherches": "/etudes-data-intelligence",
  };
  return map[key] || "/#services";
};

export default function Footer() {
  const services = [
    "servicesconseils",
    "comptabilite-certification",
    "etudes-recherches",
  ];

  return (
    <footer
      className="py-12"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-text-on-dark)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3
              className="text-xl font-serif font-bold mb-4 flex items-center gap-3"
              style={{ color: "var(--color-text-on-dark)" }}
            >
              <Image
                src="/Logos/LogoV2.png"
                alt="Orion Conseil Logo"
                width={200}
                height={80}
                style={{ width: "auto", height: "auto", maxHeight: "4rem" }}
              />
            </h3>
            <p
              style={{
                color: "rgba(var(--color-white-rgb), 0.9)",
                fontSize: "0.875rem",
              }}
            >
              Orion Conseil — cabinet de conseil accompagnant les entreprises et
              organisations sur leurs enjeux stratégiques, opérationnels et
              financiers.
            </p>
          </div>

          <div>
            <h4
              className="font-serif font-semibold mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#accueil"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "rgba(var(--color-white-rgb), 0.9)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "rgba(var(--color-white-rgb), 0.9)";
                  }}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "rgba(var(--color-white-rgb), 0.9)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "rgba(var(--color-white-rgb), 0.9)";
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/notreequipe"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "rgba(var(--color-white-rgb), 0.9)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "rgba(var(--color-white-rgb), 0.9)";
                  }}
                >
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "rgba(var(--color-white-rgb), 0.9)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "rgba(var(--color-white-rgb), 0.9)";
                  }}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "rgba(var(--color-white-rgb), 0.9)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "rgba(var(--color-white-rgb), 0.9)";
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="font-serif font-semibold mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Nos services
            </h4>
            <ul className="space-y-2">
              {services.map((k) => (
                <li key={k}>
                  <Link
                    href={serviceKeyToUrl(k)}
                    className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                    style={{ color: "rgba(var(--color-white-rgb), 0.9)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "rgba(var(--color-white-rgb), 0.9)";
                    }}
                  >
                    {serviceKeyToTitle(k)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-serif font-semibold mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Réseaux
            </h4>
            <div
              className="flex space-x-4"
              style={{ color: "rgba(var(--color-white-rgb), 0.9)" }}
            >
              <a href="#" aria-label="LinkedIn" style={{ color: "inherit" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.18h.06c.54-1.02 1.86-2.18 3.84-2.18 4.11 0 4.87 2.71 4.87 6.24V24h-4V15.5c0-2.03-.04-4.65-2.83-4.65-2.83 0-3.26 2.2-3.26 4.49V24h-4V8z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" style={{ color: "inherit" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 4.56c-.89.39-1.85.65-2.86.77 1.03-.62 1.82-1.6 2.2-2.77-.96.57-2.02.98-3.15 1.2C19.5 2.98 18.26 2.5 17 2.5c-2.42 0-4.38 1.96-4.38 4.38 0 .34.04.67.11.98C8.3 7.66 4.15 5.79 1.67 2.9c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.79 1.9 3.56-.7-.02-1.36-.21-1.94-.53v.05c0 2.06 1.47 3.78 3.42 4.17-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.15 2.96 4.04 3-1.48 1.16-3.36 1.85-5.4 1.85-.35 0-.7-.02-1.04-.06C2.95 21.29 6.46 22 10.25 22c6.18 0 9.56-5.12 9.56-9.56v-.44c.66-.48 1.22-1.08 1.67-1.76-.6.27-1.25.45-1.93.53.69-.41 1.21-1.06 1.46-1.84z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" style={{ color: "inherit" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24H12V14.7h-2.7v-3.6H12V8.2c0-2.7 1.64-4.17 4.03-4.17 1.15 0 2.14.09 2.43.12v2.82h-1.67c-1.31 0-1.57.62-1.57 1.53v2.02h3.14l-.41 3.6h-2.73V24h5.36c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 text-sm"
          style={{
            borderTop: "1px solid rgba(var(--color-white-rgb), 0.12)",
            color: "rgba(var(--color-white-rgb), 0.65)",
          }}
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              &copy; {new Date().getFullYear()} Orion Conseil. Tous droits
              réservés.
            </div>
            <div className="text-right">
              <a
                href="/privacy"
                style={{
                  color: "rgba(var(--color-white-rgb), 0.65)",
                  fontSize: "0.75rem",
                }}
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
