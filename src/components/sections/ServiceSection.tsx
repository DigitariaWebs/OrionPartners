"use client";

import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { Globe, Settings, BarChart3, Check } from "lucide-react";
import Button from "../ui/Button";


const services = [
  {
    id: "servicesconseils",
    title: "Services Conseils",
    description:
      "Nous offrons des services de conseil stratégique et opérationnel pour accompagner les entreprises à relever leurs défis complexes et atteindre leurs objectifs de performance.",
    features: [
      "Stratégie et Croissance d'Entreprise",
      "Représentation & Support Opérationnel",
      "Conseil en Private Equity (Capital-Investissement)",
      "Gestion des Ressources humaines",
    ],
    pageLink: "/servicesconseils",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: "comptabilite-certification",
    title: "Comptabilité & certification",
    description:
      "Une information financière fiable est le socle de toute décision. Nous garantissons la production de vos états financiers, nous certifions la sincérité de vos comptes et nous vous fournissons des tableaux de bord clairs pour piloter votre performance.",
    features: ["Calcul de Paie", "Conformité Fiscale & Réglementaire"],
    pageLink: "/comptabilite-certification",
    icon: <Settings className="w-8 h-8" />,
  },
  {
    id: "etudes-recherches",
    title: "Études et recherches",
    description:
      "Nous réalisons des études et des recherches pour vous fournir des analyses claires, pertinentes et exploitables. En combinant des méthodologies rigoureuses et une connaissance approfondie du marché, nous aidons nos clients à prendre des décisions éclairées et à saisir les meilleures opportunités.",
    features: [
      "Business Intelligence",
      "Science des Données & Analyse Prédictive",
      "Études de Marché & Veille Stratégique",
    ],
    pageLink: "/etudes-data-intelligence",
    icon: <BarChart3 className="w-8 h-8" />,
  },
];

// Animation variants (typed)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


export default function NosServicesSection() {
  const router = useRouter();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full scroll-mt-24 bg-white"
    >
      {/* Decorative top rule */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Title + Intro */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2
            id="services-heading"
            className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "var(--color-primary)" }}
          >
            Nos Services
          </h2>
          <p className="mt-4 text-pretty text-sm leading-6 text-neutral-700 sm:text-base">
            {`Plus que des services, nous livrons des résultats. Notre mission est de catalyser votre succès en République Démocratique du Congo en transformant la complexité en avantage compétitif. À travers nos pôles d'expertise, nous déployons des solutions stratégiques et opérationnelles qui génèrent un impact tangible sur votre performance.`}
          </p>
        </motion.header>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border h-full flex flex-col"
              style={{
                borderColor: "var(--color-border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(var(--color-primary-rgb), 0.2)";
                const iconDiv = e.currentTarget.querySelector(
                  ".service-icon"
                ) as HTMLElement;
                if (iconDiv) {
                  iconDiv.style.backgroundColor =
                    "rgba(var(--color-primary-rgb), 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                const iconDiv = e.currentTarget.querySelector(
                  ".service-icon"
                ) as HTMLElement;
                if (iconDiv) {
                  iconDiv.style.backgroundColor =
                    "rgba(var(--color-primary-rgb), 0.1)";
                }
              }}
            >
              <div
                className="service-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors duration-300"
                style={{
                  backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                  color: "var(--color-primary)",
                }}
              >
                {service.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm mb-4 line-clamp-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {service.description}
              </p>

              <div className="mb-4 flex-grow">
                <h4
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Services inclus:
                </h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <Check
                        className="w-3 h-3 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--color-accent)" }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => router.push(service.pageLink)}
                >
                  En savoir plus
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Intersection-based fade border at bottom to separate sections visually */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}
