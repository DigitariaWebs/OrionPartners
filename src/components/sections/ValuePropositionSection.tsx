"use client";

import { motion, Variants } from "framer-motion";
import { Target, Award, Users } from "lucide-react";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ValuePropositionSection() {
  return (
    <section className="relative w-full scroll-mt-24 bg-gradient-to-b from-white to-gray-50">
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
            id="value-proposition-heading"
            className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "var(--color-primary)" }}
          >
            Un accompagnement sur mesure, selon les besoins de votre
            organisation
          </h2>
          <p className="mt-4 text-pretty text-sm leading-6 font-semibold text-[var(--color-muted)] sm:text-base">
            Nous transformons vos défis en opportunités en vous apportant des
            solutions sur mesure, alignées sur vos réalités opérationnelles et
            vos ambitions.
          </p>
          <p
            className="mt-4 text-pretty text-sm leading-6  sm:text-base"
            style={{ color: "var(--color-muted)" }}
          >
            Optimiser votre performance et assurer votre développement durable.
          </p>
        </motion.header>

        {/* Second Block - Engagement et collaboration */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, #1e3a5f 100%)",
          }}
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12 lg:p-16">
            {/* Text content */}
            <div className="flex flex-col justify-center text-white">
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-lg sm:text-xl leading-relaxed mb-6">
                  Nous nous engageons à développer des solutions intégrées qui
                  optimisent l&apos;atteinte de résultats de nos clients tout en
                  assurant la conformité et le respect des meilleures pratiques
                  éthiques.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-lg sm:text-xl leading-relaxed">
                  Nous travaillons en collaboration avec les plus hauts
                  dirigeants des plus grandes entreprises mondiales, afin de les
                  aider à créer et à mettre en œuvre les meilleures solutions
                  pour l&apos;avenir de leurs entreprises.
                </p>
              </motion.div>
            </div>

            {/* Image/Visual side */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full min-h-[300px] lg:min-h-[400px] rounded-xl overflow-hidden"
              >
                {/* Placeholder for image - you can replace with actual image */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center">
                        <Target className="w-12 h-12 text-white mb-2" />
                        <span className="text-white text-sm font-semibold">
                          Excellence
                        </span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center">
                        <Award className="w-12 h-12 text-white mb-2" />
                        <span className="text-white text-sm font-semibold">
                          Éthique
                        </span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center">
                        <Users className="w-12 h-12 text-white mb-2" />
                        <span className="text-white text-sm font-semibold">
                          Collaboration
                        </span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center mb-2">
                          <div className="w-10 h-10 rounded-full border-4 border-white" />
                        </div>
                        <span className="text-white text-sm font-semibold">
                          Innovation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Decorative bottom rule */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}
