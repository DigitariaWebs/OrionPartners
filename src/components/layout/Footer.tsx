'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Newsletter from "../ui/Newsletter";

const serviceKeyToTitle = (key: string): string => {
  const map: Record<string, string> = {
    servicesconseils: "Services Conseils",
    "comptabilite-certification": "Comptabilité & certification",
    "etudes-recherches": "Études et recherches",
  };
  return map[key] || "";
};

const serviceKeyToUrl = (key: string): string => {
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
      className="py-12 border-t border-gray-200"
      style={{
        backgroundColor: "var(--color-background-secondary)",
        color: "var(--color-dark)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3
              className="text-xl font-serif font-bold mb-4 flex items-center gap-3"
              style={{ color: "var(--color-dark)" }}
            >
              <Image
                src="/Logos/Logo.png"
                alt="Orion Conseil Logo"
                width={200}
                height={80}
                style={{ width: "auto", height: "auto", maxHeight: "4rem" }}
              />
            </h3>
            <p
              style={{
                color: "rgba(0, 0, 0, 0.7)",
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
              style={{ color: "var(--color-primary)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#accueil"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "var(--color-dark)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-dark)";
                  }}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "var(--color-dark)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-dark)";
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/notreequipe"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "var(--color-dark)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-dark)";
                  }}
                >
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "var(--color-dark)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-dark)";
                  }}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                  style={{ color: "var(--color-dark)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-dark)";
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
              style={{ color: "var(--color-primary)" }}
            >
              Nos services
            </h4>
            <ul className="space-y-2">
              {services.map((k) => (
                <li key={k}>
                  <Link
                    href={serviceKeyToUrl(k)}
                    className="transition-all duration-300 cursor-pointer hover:scale-105 pb-1 hover:text-accent"
                    style={{ color: "var(--color-dark)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-dark)";
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
            borderTop: "1px solid rgba(0, 0, 0, 0.12)",
            color: "rgba(0, 0, 0, 0.65)",
          }}
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              &copy; {new Date().getFullYear()} Orion Conseil. Tous droits
              réservés.
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-3">
                <a
                  href="https://www.instagram.com/orionconseil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "rgba(0, 0, 0, 0.65)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(0, 0, 0, 0.65)";
                  }}
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://x.com/OrionConseil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "rgba(0, 0, 0, 0.65)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(0, 0, 0, 0.65)";
                  }}
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61580314478373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "rgba(0, 0, 0, 0.65)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(0, 0, 0, 0.65)";
                  }}
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/company/orionconseil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "rgba(0, 0, 0, 0.65)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(0, 0, 0, 0.65)";
                  }}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
