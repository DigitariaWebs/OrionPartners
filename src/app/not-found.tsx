"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center bg-[var(--color-light)] px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Large Number */}
            <h1 className="text-[150px] md:text-[200px] font-bold text-[var(--color-primary)] leading-none mb-4">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4">
              Page non trouvée
            </h2>
            
            <p className="text-lg md:text-xl text-[var(--color-dark)] mb-8 opacity-80">
              Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>

            {/* Decorative line */}
            <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-8"></div>

            {/* Call to Action Button */}
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-primary)] text-[var(--color-white)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-primary-hover)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 shadow-lg"
              >
                Retour à l&apos;accueil
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <p className="text-[var(--color-dark)] opacity-70">
              Besoin d&apos;aide ?{" "}
              <Link
                href="/#contact"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline font-semibold transition-colors duration-200"
              >
                Contactez-nous
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

