"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TestimonialSection: React.FC = () => {
  const clients = [
    {
      id: 1,
      name: "Boussole",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/LogoBoussole.png",
    },
    {
      id: 2,
      name: "OK",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/LogoOK.jpg",
    },
    {
      id: 3,
      name: "Logo 3",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Logo3-1024x724.jpg",
    },
    {
      id: 4,
      name: "Transparent Rouge",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Transparent-rouge-1024x724.png",
    },
    {
      id: 5,
      name: "Logo 1",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Logo1-PNG.png",
    },
    {
      id: 6,
      name: "Vamos Rouge",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Vamos-Rouge-Ok-copie-1024x1024.png",
    },
    {
      id: 7,
      name: "Logo",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Logo.jpg",
    },
    {
      id: 8,
      name: "Profil A",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/ProfilA-1024x917.jpg",
    },
    {
      id: 9,
      name: "Logo A",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/A-1024x1024.png",
    },
    {
      id: 10,
      name: "Logo 2b",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Logo2b.png",
    },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="py-16 bg-white border-t"
      style={{ borderColor: "rgba(var(--color-light-rgb), 0.5)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3
            className="text-2l lg:text-3xl font-semibold mb-2"
            style={{ color: "var(--color-text-primary)" }}
          >
            Ils nous ont choisi
          </h3>
          <div
            className="w-24 h-1 mx-auto rounded-full "
            style={{
              background: `var(--color-accent)`,
            }}
          ></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, var(--color-white) 0%, transparent 100%)`,
            }}
          ></div>
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(270deg, var(--color-white) 0%, transparent 100%)`,
            }}
          ></div>

          {/* Scrolling Container */}
          <div
            className="flex animate-marquee hover:animate-marquee-paused"
            style={{
              width: `${duplicatedClients.length * 200}px`,
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="relative w-full h-full flex items-center justify-center p-4 rounded-lg transition-all duration-300 group-hover:shadow-md"
                  style={{
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NS4zMzMzIDQwVjYwSDE0LjY2NjdWNDBIODUuMzMzM1pNMTAwIDQwVjYwSDE5NFY0MEgxMDBaIiBmaWxsPSIjRDFENUNCIi8+Cjwvc3ZnPgo=";
                    }}
                  />

                  {/* Hover Effect Overlay */}
                  <div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-30 rounded-lg transition-all duration-300"
                    style={{
                      borderColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--color-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "transparent";
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p
            className="text-md max-w-2xl mx-auto"
            style={{ color: "rgba(var(--color-dark-rgb), 0.6)" }}
          >
            Plus de 50+ entreprises nous font confiance pour leur développement
            en République Démocratique du Congo
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-paused {
          animation-play-state: paused;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
