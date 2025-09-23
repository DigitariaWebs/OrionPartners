'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from "../ui/Newsletter";

const serviceKeyToTitle = (key: string) => {
  const map: Record<string, string> = {
    servicesconseils: "Services Conseils",
    "comptabilite-certification": "Comptabilité & certification",
    "etudes-recherches": "Études et recherches",
  };
  return map[key] || "";
};

const serviceKeyToUrl = (key: string) => {
  const map: Record<string, string> = {
    servicesconseils: "/servicesconseils",
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
            <Newsletter variant="footer" />
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
