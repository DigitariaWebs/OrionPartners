"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useModal } from "../providers/ModalProvider";

export type ServiceInfo = {
  id: string;
  title: string;
  imageSrc?: string;
  pricing?: string;
  description: string;
  features?: string[];
  pageLink?: string;
};

const SERVICE_DETAILS: ServiceInfo[] = [
  {
    id: "services-conseils",
    title: "Services-conseils",
    imageSrc: "/ServiceImages/ServicesConseils.png",
    pricing: "Sur devis",
    description:
      "Nous offrons des services de conseil stratégique et opérationnel pour accompagner les entreprises à relever leurs défis complexes et atteindre leurs objectifs de performance. Grâce à une approche axée sur les résultats, nous élaborons des stratégies performantes et apportons des solutions concrètes pour optimiser vos opérations, renforcer votre résilience et améliorer votre performance globale.",
    features: [
      "Stratégie et Croissance d'Entreprise",
      "Représentation & Support Opérationnel",
      "Conseil en Private Equity (Capital-Investissement)",
      "Gestion des Ressources humaines",
    ],
    pageLink: "/services-conseils",
  },
  {
    id: "comptabilite-certification",
    title: "Comptabilité & certification",
    imageSrc: "/ServiceImages/ComptabiliteCertification.png",
    pricing: "Selon mission",
    description:
      "Une information financière fiable est le socle de toute décision. Nous garantissons la production de vos états financiers, nous certifions la sincérité de vos comptes et nous vous fournissons des tableaux de bord clairs pour piloter votre performance. Au-delà de l'obligation légale, nous transformons votre comptabilité en un véritable outil de gestion.",
    features: ["Calcul de Paie", "Conformité Fiscale & Réglementaire"],
    pageLink: "/comptabilite-certification",
  },
  {
    id: "representation-accompagnement",
    title: "Représentation & Support Opérationnel",
    imageSrc: "/ServiceImages/RepresentationAccompagnement.png",
    pricing: "Sur demande",
    description:
      "Votre partenaire stratégique pour réussir en République Démocratique du Congo. La RDC offre un potentiel exceptionnel mais sa complexité administrative, réglementaire et culturelle nécessite une expertise locale. Sans partenaire sur le terrain, les projets s'exposent à des retards et surcoûts.\n\nNous sommes votre extension stratégique et opérationnelle en RDC. Notre mission : transformer la complexité locale en avantage compétitif grâce à notre équipe engagée à 100% pour votre succès.",
    features: [
      "Accompagnement terrain",
      "Représentation lors d'événements",
      "Support opérationnel sur mesure",
    ],
    pageLink: "/representation-accompagnement",
  },
  {
    id: "etudes-recherches",
    title: "Études et recherches",
    imageSrc: "/ServiceImages/EtudesRecherches.png",
    pricing: "Forfait / projet",
    description:
      "Nous réalisons des études et des recherches pour vous fournir des analyses claires, pertinentes et exploitables. En combinant des méthodologies rigoureuses et une connaissance approfondie du marché, nous aidons nos clients à prendre des décisions éclairées et à saisir les meilleures opportunités.",
    features: [
      "Business Intelligence",
      "Science des Données & Analyse Prédictive",
      "Études de Marché & Veille Stratégique",
    ],
    pageLink: "/etudes-data-intelligence",
  },
];

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string | null;
}

export default function ServiceModel({
  isOpen,
  onClose,
  serviceId,
}: ServiceModalProps) {
  const service = SERVICE_DETAILS.find((s) => s.id === serviceId);
  const { openModal } = useModal();
  const router = useRouter();

  React.useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        event.preventDefault();
        onClose();
      }
    };

    const preventScroll = (e: TouchEvent) => e.preventDefault();

    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.addEventListener("keydown", handleEscKey, true);
      document.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
        document.removeEventListener("keydown", handleEscKey, true);
        document.removeEventListener("touchmove", preventScroll);
      };
    }
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed inset-4 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
              {/* Left: Visual hero */}
              <div className="relative h-52 md:h-auto md:min-h-[420px] bg-gray-100">
                {service.imageSrc && (
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.35)] to-transparent md:from-[rgba(0,0,0,0.45)]" />

                <div className="absolute left-6 bottom-6 text-white md:left-8 md:bottom-8">
                  <h3 className="text-lg md:text-2xl font-semibold drop-shadow">
                    {service.title}
                  </h3>
                  {service.pricing && (
                    <div
                      className="mt-2 inline-block text-sm md:text-base font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(var(--color-white-rgb), 0.12)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {service.pricing}
                    </div>
                  )}
                </div>

                <button
                  onClick={onClose}
                  aria-label="Fermer"
                  className="absolute left-4 top-4 w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center shadow-sm hover:bg-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-gray-700" />
                </button>
              </div>

              {/* Right: Content */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex-1">
                  <h2
                    id="service-modal-title"
                    className="text-lg md:text-xl font-bold text-gray-800"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && (
                    <ul className="mt-5 grid grid-cols-1 gap-3">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[color:var(--color-accent)] text-white">
                            <Check className="w-4 h-4" />
                          </span>
                          <span className="text-sm text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(
                        () =>
                          openModal("service", { serviceName: service.title }),
                        120
                      );
                    }}
                    className="flex-1 px-4 py-3 rounded-xl text-white font-semibold cursor-pointer hover:scale-105 transition-all duration-200"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    Réserver maintenant
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        if (service?.pageLink) {
                          router.push(service.pageLink);
                        }
                      }, 120);
                    }}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 bg-white font-medium hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
