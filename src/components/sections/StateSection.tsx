"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

function Counter({ end, duration, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentCount = countRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentCount) {
      observer.observe(currentCount);
    }

    return () => {
      if (currentCount) {
        observer.unobserve(currentCount);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <div
      ref={countRef}
      className="text-5xl font-bold mb-2"
      style={{ color: "var(--color-primary)" }}
    >
      {prefix}
      {count}
      {suffix}
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StateSection() {
  return (
    <section className="relative w-full scroll-mt-24 bg-white">
      {/* Decorative top rule */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Intro, Expertise and Approach */}
          <div className="lg:col-span-2 space-y-12">
            {/* Intro Text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Orion Conseil est un cabinet de conseil spécialisé dans
                l&apos;accompagnement des entreprises à chaque étape de leur
                développement. Que ce soit pour optimiser vos opérations,
                pénétrer un nouveau marché ou sécuriser vos activités, nous vous
                apportons une expertise locale combinée à des standards
                internationaux.
              </p>
            </motion.div>
            {/* Notre Expertise */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Notre Expertise
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Plus de 15 ans d&apos;expérience dans le conseil stratégique et
                l&apos;accompagnement des entreprises vers l&apos;excellence
                opérationnelle.
              </p>
            </motion.div>

            {/* Notre Approche */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Notre Approche
              </h3>
              <p className="text-base leading-relaxed text-gray-700 mb-6">
                Une méthodologie éprouvée basée sur l&apos;analyse rigoureuse et
                la mise en œuvre pragmatique de solutions sur mesure.
              </p>

              {/* Bullet Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-1 h-6"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                  </div>
                  <p className="text-base text-gray-700">
                    Une approche sur-mesure pour chaque client
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-1 h-6"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                  </div>
                  <p className="text-base text-gray-700">
                    L&apos;obsession du résultat comme moteur
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-1 h-6"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                  </div>
                  <p className="text-base text-gray-700">
                    Des solutions concrètes pour un impact durable
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - En Chiffres */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="lg:col-span-1"
          >
            <div
              className="sticky top-24 rounded-2xl p-8 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                borderLeft: "4px solid var(--color-accent)",
              }}
            >
              <h3
                className="text-xl font-bold mb-8 text-center"
                style={{ color: "var(--color-primary)" }}
              >
                En Chiffres
              </h3>

              <div className="space-y-8">
                {/* 50+ Clients */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <Counter end={50} duration={2} suffix="+" />
                  <p className="text-sm uppercase tracking-wider text-gray-600 font-semibold">
                    Clients accompagnés
                  </p>
                </motion.div>

                {/* 15 Years */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <Counter end={15} duration={2} suffix="+" />
                  <p className="text-sm uppercase tracking-wider text-gray-600 font-semibold">
                    Années d&apos;expérience
                  </p>
                </motion.div>

                {/* 3 Sectors */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <Counter end={3} duration={2} />
                  <p className="text-sm uppercase tracking-wider text-gray-600 font-semibold">
                    Secteurs d&apos;activité
                  </p>
                </motion.div>

                {/* 95% */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <Counter end={95} duration={2} suffix="%" />
                  <p className="text-sm uppercase tracking-wider text-gray-600 font-semibold">
                    Taux de satisfaction client
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom rule */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}