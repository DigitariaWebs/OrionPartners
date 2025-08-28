"use client";
import { Phone, Smartphone, Mail, MapPin, Users, MessageCircle } from "lucide-react";
import { useModal } from "../providers/ModalProvider";
export default function ContactSection() {
  const { openModal } = useModal();
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative py-20 md:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--color-accent)" }}
          >
            Parlons ensemble
          </p>
          <h2
            className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Contactez-nous
          </h2>
          <p
            className="mt-4 text-[15px] md:text-base max-w-3xl mx-auto"
            style={{ color: "var(--color-text-primary)" }}
          >
            Prêt à commencer ? Planifiez une consultation gratuite et obtenez
            une évaluation personnalisée de vos besoins.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <div className="space-y-6">
            <h3
              className="text-2xl md:text-3xl font-extrabold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Informations de contact
            </h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/243991222231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl ring-1 ring-black/5 bg-white transition-all hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-2xl grid place-items-center"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle
                    className="w-6 h-6"
                    style={{ color: "var(--color-white)" }}
                  />
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    WhatsApp
                  </h4>
                  <p
                    className="transition-colors"
                    style={{ color: "rgba(var(--color-dark-rgb), 0.75)" }}
                  >
                    +243 991 222 231
                  </p>
                </div>
              </a>
              <a
                href="tel:+15819957492"
                className="flex items-center gap-4 p-4 rounded-2xl ring-1 ring-black/5 bg-white transition-all hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-2xl grid place-items-center"
                  style={{ background: "var(--color-accent)" }}
                >
                  <Phone
                    className="w-6 h-6"
                    style={{ color: "var(--color-white)" }}
                  />
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Téléphone (Montréal)
                  </h4>
                  <p style={{ color: "rgba(var(--color-dark-rgb), 0.75)" }}>
                    +1 581 995 7492
                  </p>
                </div>
              </a>
              <a
                href="mailto:contact@elitepartners-rdc.com"
                className="flex items-center gap-4 p-4 rounded-2xl ring-1 ring-black/5 bg-white transition-all hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-2xl grid place-items-center"
                  style={{ background: "var(--color-background-secondary)" }}
                >
                  <Mail
                    className="w-6 h-6"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Email
                  </h4>
                  <p
                    className="transition-colors"
                    style={{ color: "rgba(var(--color-dark-rgb), 0.75)" }}
                  >
                    contact@elitepartners-rdc.com
                  </p>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=No.+1+Av.+Tombalbaye,+Kinshasa-Gombe,+DRC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl ring-1 ring-black/5 bg-white transition-all hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-2xl grid place-items-center"
                  style={{ background: "var(--color-light)" }}
                >
                  <MapPin
                    className="w-6 h-6"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Bureau de Kinshasa
                  </h4>
                  <p
                    className="transition-colors"
                    style={{ color: "rgba(var(--color-dark-rgb), 0.75)" }}
                  >
                    No. 1 Av. Tombalbaye, Kinshasa-Gombe, DRC
                  </p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Montreal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl ring-1 ring-black/5 bg-white transition-all hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-2xl grid place-items-center"
                  style={{ background: "var(--color-light)" }}
                >
                  <MapPin
                    className="w-6 h-6"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Bureau de Montréal
                  </h4>
                  <p
                    className="transition-colors"
                    style={{ color: "rgba(var(--color-dark-rgb), 0.75)" }}
                  >
                    Ouvre bientôt.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div
              className="rounded-3xl p-10 text-center shadow-sm ring-1 ring-black/5 h-full flex flex-col justify-center items-center"
              style={{ background: "var(--color-primary)" }}
            >
              <Users
                className="w-14 h-14 mx-auto mb-5 opacity-90"
                style={{ color: "var(--color-white)" }}
              />
              <h3
                className="text-2xl md:text-3xl font-extrabold mb-4"
                style={{ color: "var(--color-white)" }}
              >
                Consultation gratuite
              </h3>
              <p
                className="text-[15px] md:text-base mb-8 max-w-2xl mx-auto"
                style={{ color: "rgba(var(--color-white-rgb), 0.95)" }}
              >
                Contactez-nous aujourd&apos;hui pour une évaluation
                personnalisée de vos besoins. Notre équipe vous accompagnera
                dans la mise en place des services adaptés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
                <button
                  onClick={() => openModal("consultation")}
                  className="px-6 py-3 rounded-xl font-semibold text-white shadow hover:-translate-y-0.5 transition-transform cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-accent), var(--color-accent-hover))",
                  }}
                >
                  Demander une consultation
                </button>
                <a
                  href="tel:5142228271"
                  className="px-6 py-3 rounded-xl font-semibold ring-1 ring-black/5 bg-white/70 backdrop-blur hover:-translate-y-0.5 transition-transform inline-flex items-center justify-center"
                  style={{ color: "var(--color-primary)" }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Modal is provided globally by ModalProvider */}
      </div>
    </section>
  );
}
