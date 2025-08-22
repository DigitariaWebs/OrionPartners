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

          {/* Step 1 */}
          <motion.div
            key="a-propos"
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
                className="text-2xl font-bold mb-2 text-center"
                style={{ color: "var(--color-primary)" }}
              >
                OrionPartners
              </h3>
              <p className="text-gray-700 text-lg text-justify">
                Un cabinet de services-conseils en gestion d’entreprises et des
                organisations. Nous accompagnons les entreprises et les
                organisations publiques et privées sur leurs enjeux
                stratégiques, opérationnels et financiers. Notre force réside
                dans une approche unique qui marie une connaissance intime des
                écosystèmes locaux avec la rigueur des standards internationaux.
                Cette double expertise nous permet de concevoir des solutions à
                haute valeur ajoutée, parfaitement pertinentes et immédiatement
                opérationnelles, pour transformer vos ambitions en succès
                concrets.
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
                  Notre Mission
                </h4>
                <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-prose mx-auto text-justify">
                  Notre mission est d&apos;accompagner les entreprises et les
                  organisations publiques en RDC pour transformer leurs défis
                  les plus complexes en performance durable. Nous déployons des
                  solutions stratégiques, financières et opérationnelles qui
                  marient une compréhension intime des réalités congolaises avec
                  l&apos;exigence des meilleures pratiques internationales.
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
                  Notre Expertise
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
                  Notre Approche
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

            <div className="w-full max-w-3xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-blue-50">
              <h3
                className="text-2xl font-bold mb-2 text-center"
                style={{ color: "var(--color-primary)" }}
              >
                Nos Valeurs
              </h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 text-center">
                Nos valeurs fondamentales guident chacune de nos actions et
                définissent notre culture d&apos;entreprise.
              </p>

              <ul className="space-y-3">
                {[
                  {
                    title: "Excellence",
                    text: "Nous nous efforçons constamment d'atteindre l'excellence dans tous nos services et interactions.",
                  },
                  {
                    title: "Leadership",
                    text: "Nous cultivons un leadership éthique qui inspire confiance et respect.",
                  },
                  {
                    title: "Intégrité",
                    text: "Nous maintenons une intégrité inébranlable dans toutes nos actions.",
                  },
                  {
                    title: "Engagement",
                    text: "Nous nous engageons à surpasser les attentes en fournissant des services de qualité supérieure.",
                  },
                ].map((v, i) => (
                  <motion.li
                    key={v.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: i * 0.12 }}
                    className="flex gap-4 items-start"
                  >
                    <span className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold">
                      {i + 1}
                    </span>
                    <div>
                      <h4
                        className="text-lg font-semibold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {v.title}
                      </h4>
                      <p className="text-gray-700 text-sm md:text-base">
                        {v.text}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
