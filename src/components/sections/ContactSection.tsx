"use client";
import { Phone, Mail, MapPin, Users } from "lucide-react";
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
                href="https://wa.me/15819957492"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl ring-1 ring-black/5 bg-white transition-all hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-2xl grid place-items-center"
                  style={{ background: "#25D366" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--color-white)" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
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
                    +1 581 995 7492
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@orionconseil.com"
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
                    contact@orionconseil.com
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
