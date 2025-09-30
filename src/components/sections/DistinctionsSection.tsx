"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const distinctions = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Intelligence locale",
    description:
      "Connaissance approfondie de plusieurs secteurs de développement",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Expertise sectorielle",
    description:
      "Connaissance approfondie de plusieurs secteurs de développement",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Vision stratégique",
    description:
      "Prise en compte des implications stratégiques à long terme",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Rigueur analytique",
    description:
      "Approcher rigoureuse produisant des résultats fiables et crédibles",
  },
];

export default function DistinctionsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Image with curved edge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-full min-h-[400px] lg:min-h-[600px]"
        >
          {/* Image Container with curve mask */}
          <div className="relative h-full w-full">
            <div className="absolute inset-0 overflow-hidden">
              {/* Replace this src with your actual image path */}
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                alt="Ce qui nous distingue"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Curved mask overlay for the right side */}
            <div 
              className="hidden lg:block absolute right-0 top-0 bottom-0 w-32"
              style={{
                clipPath: "ellipse(100% 100% at 100% 50%)",
                backgroundColor: "var(--color-primary)",
              }}
            />
          </div>
        </motion.div>

        {/* Right Side - Primary Color Background with Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center"
          style={{
            background: "linear-gradient(to right, var(--color-primary) 0%, #1e3a5f 100%)",
          }}
        >
          {/* Geometric shapes in background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-10 right-10 w-96 h-96 border-2 border-white/20 rounded-full" />
            <div className="absolute bottom-10 left-10 w-64 h-64 border-2 border-white/20 rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-white/20 transform rotate-45" />
          </div>

          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 lg:py-16 w-full">
            {/* Title */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ce qui nous distingue
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl">
                Nous combinons expertise et vision stratégique pour livrer des solutions sur mesure
                à fort impact qui façonnent l&apos;avenir de nos clients.
              </p>
            </motion.div>

            {/* Distinctions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {distinctions.map((distinction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  {/* Icon */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {distinction.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {distinction.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {distinction.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}