"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useModal } from "../providers/ModalProvider";
import { Briefcase, FileCheck2, SearchCheck } from "lucide-react";

/**
 * Section: Nos Services
 * - Recreates the referenced layout: circular visuals above titles, four columns, corporate style
 * - TailwindCSS + Framer Motion for animations
 * - Accessible, responsive, semantic HTML
 */

const services = [
  {
    id: "servicesconseils",
    title: "Services Conseils",
    description:
      "Conseil stratégique, opérationnel et financier pour accompagner les entreprises à relever leurs défis complexes.",
    icon: Briefcase,
    image: "/ServiceImages/ServicesConseils.png",
    gradient: "from-sky-600 via-sky-400 to-sky-700",
  },
  {
    id: "comptabilite-certification",
    title: "Comptabilité & certification",
    description:
      "Gestion comptable rigoureuse, déclarations fiscales et reporting financier pour garantir votre conformité et optimiser votre performance.",
    icon: FileCheck2,
    image: "/ServiceImages/ComptabiliteCertification.png",
    gradient: "from-emerald-600 via-emerald-400 to-emerald-700",
  },
  {
    id: "etudes-recherches",
    title: "Études et recherches",
    description:
      "Analyses claires et pertinentes pour des décisions éclairées et la saisie des meilleures opportunités.",
    icon: SearchCheck,
    image: "/ServiceImages/EtudesRecherches.png",
    gradient: "from-violet-600 via-violet-400 to-violet-700",
  },
];

// Animation variants (typed)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

function FullWidthVisual({ src, title }: { src: string; title: string }) {
  return (
    <div className="w-full overflow-hidden rounded-t-2xl bg-gray-100">
      <div className="relative h-40 sm:h-48 w-full group-hover:scale-105 transition-transform duration-500">
        <Image
          src={src}
          alt={`${title} illustration`}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
          style={{ objectFit: "cover" }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{ backgroundColor: "rgba(var(--color-primary-rgb), 0.06)" }}
        />
      </div>
    </div>
  );
}

export default function NosServicesSection() {
  const { openModal } = useModal();

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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <button
              key={s.title}
              onClick={() =>
                openModal("service", { serviceId: s.id, serviceName: s.title })
              }
              aria-label={`En savoir plus sur ${s.title}`}
              className="group block text-left cursor-pointer"
            >
              <motion.article
                variants={fadeInUp}
                className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-white/90 ring-1 ring-black/5 shadow-sm transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] focus-within:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                {/* Top Visual */}
                {/* Full-width image visual */}
                <div className="w-full">
                  <FullWidthVisual src={s.image} title={s.title} />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-8 pb-8 text-center">
                  {/* Title + Description grouped at top */}
                  <div className="pt-4">
                    <div className="min-h-[3rem] sm:min-h-[3.5rem] flex items-center justify-center">
                      <h3
                        className="text-base font-semibold tracking-tight"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-neutral-700">
                      {s.description}
                    </p>
                  </div>

                  {/* Card is clickable via wrapper Link (CTA removed) */}
                </div>
                {/* className on the article already has hover:shadow; we add group-hover:-translate-y-0.5 via tailwind if needed in CSS config. */}
              </motion.article>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Intersection-based fade border at bottom to separate sections visually */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}
