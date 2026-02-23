"use client";

import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { Globe, Settings, BarChart3, Check } from "lucide-react";
import Button from "../ui/Button";
import { useI18n } from "@/i18n/useI18n";


const services = (
  t: (key: string) => string,
): Array<{
  id: string;
  title: string;
  description: string;
  features: string[];
  pageLink: string;
  icon: React.JSX.Element;
}> => [
  {
    id: "servicesconseils",
    title: t("services.servicesconseils.title"),
    description: t("services.servicesconseils.description"),
    features: [
      t("services.servicesconseils.feature1"),
      t("services.servicesconseils.feature2"),
      t("services.servicesconseils.feature3"),
      t("services.servicesconseils.feature4"),
    ],
    pageLink: "/servicesconseils",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: "comptabilite",
    title: t("services.comptabilite.title"),
    description: t("services.comptabilite.description"),
    features: [
      t("services.comptabilite.feature1"),
      t("services.comptabilite.feature2"),
    ],
    pageLink: "/comptabilite-certification",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    id: "etudes",
    title: t("services.etudes.title"),
    description: t("services.etudes.description"),
    features: [
      t("services.etudes.feature1"),
      t("services.etudes.feature2"),
      t("services.etudes.feature3"),
    ],
    pageLink: "/etudes-data-intelligence",
    icon: <Settings className="w-8 h-8" />,
  },
];

// Animation variants (typed)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function NosServicesSection() {
  const router = useRouter();
  const { t } = useI18n();
  const servicesData = services(t);

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
            {t("services.title")}
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-neutral-700 sm:text-lg text-justify">
            {t("services.intro")}
          </p>
        </motion.header>

        {/* ServiceData Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service, index) => (
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
                  ".service-icon",
                ) as HTMLElement;
                if (iconDiv) {
                  iconDiv.style.backgroundColor =
                    "rgba(var(--color-primary-rgb), 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                const iconDiv = e.currentTarget.querySelector(
                  ".service-icon",
                ) as HTMLElement;
                if (iconDiv) {
                  iconDiv.style.backgroundColor =
                    "rgba(var(--color-primary-rgb), 0.1)";
                }
              }}
            >
              {/* Icon - Fixed height section */}
              <div className="flex justify-center mb-4">
                <div
                  className="service-icon inline-flex items-center justify-center w-16 h-16 rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                    color: "var(--color-primary)",
                  }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Title - Fixed height section */}
              <h3
                className="text-xl font-semibold mb-3 min-h-[3.5rem] flex items-center justify-center"
                style={{ color: "var(--color-text-primary)" }}
              >
                {service.title}
              </h3>

              {/* Description - Fixed height section */}
              <p
                className="text-base mb-6 min-h-[7rem] flex items-start justify-center"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {service.description}
              </p>

              {/* Features - Flexible section that grows */}
              <div className="mb-4 flex-grow">
                <h4
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {t("button.primary")}:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--color-accent)" }}
                      />
                      <span className="text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button - Always at bottom */}
              <div className="mt-auto pt-4">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => router.push(service.pageLink)}
                >
                  {t("button.secondary")}
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
