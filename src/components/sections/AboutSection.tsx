"use client";
import React from "react";
import { motion } from "framer-motion";

// Animated SVG Accent
function AnimatedAccent({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={
        "absolute left-0 top-0 w-full h-full pointer-events-none z-0 " +
        className
      }
      viewBox="0 0 800 400"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 0.18, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <defs>
        <radialGradient id="accentGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="400" cy="200" rx="320" ry="120" fill="url(#accentGlow)" />
      <motion.path
        d="M100,300 Q400,100 700,300"
        stroke="#3b82f6"
        strokeWidth="6"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.svg>
  );
}

const approach = [
  "Une approche sur-mesure pour chaque client",
  "L'obsession du résultat comme moteur",
  "Des solutions concrètes pour un impact durable",
];

// (Removed StatCounter, WorldMapAnimation and fadeIn — unused)

export default function AboutSection() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const firstMarkerRef = React.useRef<HTMLDivElement | null>(null);
  const lastMarkerRef = React.useRef<HTMLDivElement | null>(null);
  const [lineDims, setLineDims] = React.useState({ top: 0, height: 0 });

  React.useEffect(() => {
    function update() {
      const container = containerRef.current;
      const first = firstMarkerRef.current;
      const last = lastMarkerRef.current;
      if (!container || !first || !last) return;
      const cRect = container.getBoundingClientRect();
      const fRect = first.getBoundingClientRect();
      const lRect = last.getBoundingClientRect();
      const fCenter = fRect.top + fRect.height / 2;
      const lCenter = lRect.top + lRect.height / 2;
      const top = Math.max(0, fCenter - cRect.top);
      const height = Math.max(2, lCenter - fCenter);
      setLineDims({ top, height });
    }
    update();
    window.addEventListener("resize", update);
    let ro: ResizeObserver | null = null;
    try {
      ro = new ResizeObserver(update);
      if (containerRef.current) ro.observe(containerRef.current);
    } catch {
      // ResizeObserver not supported in this environment
    }
    return () => {
      window.removeEventListener("resize", update);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <section
      id="a-propos"
      className="relative w-full py-20 px-4 md:px-12 lg:px-24 bg-white overflow-hidden min-h-[100vh] flex flex-col justify-center"
      aria-labelledby="about-heading"
    >
      <AnimatedAccent />
      <div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto flex flex-col gap-0 items-center"
      >
        <h2
          id="about-heading"
          className="text-4xl font-extrabold mb-10 text-center tracking-tight"
          style={{ color: "var(--color-primary)" }}
        >
          À propos
        </h2>

        <div className="w-full flex flex-col items-center">
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-0"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              transformOrigin: "top",
              width: "2px",
              background: "var(--color-primary)",
              top: `${lineDims.top}px`,
              height: `${lineDims.height}px`,
            }}
            aria-hidden="true"
          />

          {/* Step 1 - Raison d'être */}
          <motion.div
            key="raison-d-etre"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0 }}
            className="relative w-full flex flex-col items-center mb-12"
          >
            <motion.div
              ref={firstMarkerRef}
              className="absolute left-1/2 -translate-x-1/2 -top-8 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#3b82f6" opacity="0.12" />
                <circle cx="16" cy="16" r="8" fill="#3b82f6" opacity="0.25" />
              </svg>
            </motion.div>
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-blue-100 w-full text-center">
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "var(--color-primary)" }}
              >
                Une raison de croire, d&apos;exister.
              </h3>
              <p className="text-gray-700 text-lg text-justify leading-relaxed">
                Fondé sur la conviction que la prospérité de la RDC passe par
                des organisations plus fortes, Orion Conseil a été créé pour
                offrir un conseil de nouvelle génération. Face à un marché où
                les solutions importées échouent souvent, nous avons bâti un
                modèle qui ancre l&apos;excellence stratégique dans les réalités
                congolaises, pour générer un impact réel et pérenne.
              </p>
            </div>
          </motion.div>

          {/* Step 2 - Orion Conseil */}
          <motion.div
            key="a-propos"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative w-full flex flex-col items-center mb-12"
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-8 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.08,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#3b82f6" opacity="0.12" />
                <circle cx="16" cy="16" r="8" fill="#3b82f6" opacity="0.25" />
              </svg>
            </motion.div>
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-blue-100 w-full text-center">
              <h3
                className="text-2xl font-bold mb-2 text-center"
                style={{ color: "var(--color-primary)" }}
              >
                Orion Conseil
              </h3>
              <p className="text-gray-700 text-lg text-justify">
                Un cabinet de services-conseils en gestion d&apos;entreprises et des
                organisations. Nous accompagnons les entreprises et les
                organisations publiques et privées sur leurs enjeux
                stratégiques, opérationnels et financiers. Notre force réside
                dans une approche unique qui combiner une connaissance intime
                des écosystèmes locaux avec la rigueur des standards
                internationaux. Cette double expertise nous permet de concevoir
                des solutions à haute valeur ajoutée, parfaitement pertinentes
                et immédiatement opérationnelles, pour transformer vos ambitions
                en succès concrets.
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission step */}
          <motion.div
            key="vision-mission"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative w-full flex flex-col items-center mb-12"
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-8 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.12,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#3b82f6" opacity="0.12" />
                <circle cx="16" cy="16" r="8" fill="#3b82f6" opacity="0.25" />
              </svg>
            </motion.div>
            <div className="w-full flex flex-col md:flex-row gap-6 items-stretch mb-8">
              <motion.article
                className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-blue-50"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <h4
                  className="text-xl font-semibold mb-2 text-center"
                  style={{ color: "var(--color-primary)" }}
                >
                  Notre vision
                </h4>
                <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-prose mx-auto text-justify">
                  Devenir le partenaire stratégique de référence et un acteur
                  majeur dans la transformation du potentiel économique de la
                  RDC en une prospérité durable et partagée.
                </p>
              </motion.article>
              <motion.article
                className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-blue-50"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.08 }}
              >
                <h4
                  className="text-xl font-semibold mb-2 text-center"
                  style={{ color: "var(--color-primary)" }}
                >
                  Notre mission
                </h4>
                <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-prose mx-auto text-justify">
                  Notre mission est d&apos;accompagner les entreprises et les
                  organisations publiques et privées en RDC pour transformer
                  leurs défis les plus complexes en performance durable. Nous
                  déployons des solutions stratégiques, financières et
                  opérationnelles qui marient une compréhension intime des
                  réalités congolaises avec l&apos;exigence des meilleures
                  pratiques internationales.
                </p>
              </motion.article>
            </div>
          </motion.div>

          {/* Combined Expertise & Approche step (side-by-side) */}
          <motion.div
            key="expertise-approche"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full flex flex-col items-center mb-12"
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-8 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#3b82f6" opacity="0.12" />
                <circle cx="16" cy="16" r="8" fill="#3b82f6" opacity="0.25" />
              </svg>
            </motion.div>
            <div className="w-full flex flex-col md:flex-row gap-6 items-stretch mb-8">
              <motion.article
                className="flex-1 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-blue-100"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <h3
                  className="text-2xl font-bold mb-2 text-center"
                  style={{ color: "var(--color-primary)" }}
                >
                  Notre expertise
                </h3>
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-prose mx-auto text-justify">
                  Plus de 15 ans d&apos;expérience cumulée dans le conseil
                  stratégique et l&apos;accompagnement des entreprises vers
                  l&apos;excellence opérationnelle.
                </p>
              </motion.article>
              <motion.article
                className="flex-1 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-blue-100"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.08 }}
              >
                <h3
                  className="text-2xl font-bold mb-2 text-center"
                  style={{ color: "var(--color-primary)" }}
                >
                  Notre approche
                </h3>
                <ul className="space-y-2 mt-4">
                  {approach.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        aria-label="checkmark"
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white"
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.span>
                      <span className="text-base md:text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </div>
          </motion.div>

          {/* Nos Valeurs */}
          <motion.div
            key="nos-valeurs"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="relative w-full flex flex-col items-center mb-12"
          >
            <motion.div
              ref={lastMarkerRef}
              className="absolute left-1/2 -translate-x-1/2 -top-8 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.28,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#3b82f6" opacity="0.12" />
                <circle cx="16" cy="16" r="8" fill="#3b82f6" opacity="0.25" />
              </svg>
            </motion.div>

            <div className="w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-md p-8 border border-blue-50">
              <h3
                className="text-3xl md:text-4xl font-bold mb-3 text-center"
                style={{ color: "#000" }}
              >
                Nos valeurs
              </h3>
              <p className="text-gray-600 text-base md:text-lg mb-12 text-center max-w-2xl mx-auto">
                Nos valeurs fondamentales guident chacune de nos actions et
                définissent notre culture d&apos;entreprise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Leadership",
                    text: "Nous cultivons un leadership éthique qui inspire confiance et respect.",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Excellence",
                    text: "Nous nous efforçons constamment d'atteindre l'excellence dans tous nos services et interactions.",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Intégrité",
                    text: "Nous maintenons une intégrité inébranlable dans toutes nos actions.",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Engagement",
                    text: "Nous nous engageons à surpasser les attentes en fournissant des services de qualité supérieure.",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    ),
                  },
                ].map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      className="w-16 h-16 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {v.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">
                      {v.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {v.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
