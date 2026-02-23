"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useModal } from "../providers/ModalProvider";
import { useI18n } from "@/i18n/useI18n";

export type ServiceInfo = {
  id: string;
  title: string;
  imageSrc?: string;
  pricing?: string;
  description: string;
  features?: string[];
  pageLink?: string;
};

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string | null;
}

export default function ServiceModel({
  isOpen,
  onClose,
  serviceId,
}: ServiceModalProps) {
  const { t } = useI18n();
  const { openModal } = useModal();
  const router = useRouter();

  const getServiceData = (id: string) => {
    return {
      id,
      title: t(`models.serviceModal.services.${id}.title`),
      imageSrc: `/ServiceImages/${id === 'servicesconseils' ? 'ServicesConseils' : id === 'comptabilite-certification' ? 'ComptabiliteCertification' : id === 'representation-accompagnement' ? 'RepresentationAccompagnement' : 'EtudesRecherches'}.png`,
      pricing: t(`models.serviceModal.services.${id}.pricing`),
      description: t(`models.serviceModal.services.${id}.description`),
      features: t(`models.serviceModal.services.${id}.features`),
      pageLink: id === 'servicesconseils' ? '/servicesconseils' : id === 'comptabilite-certification' ? '/comptabilite-certification' : id === 'representation-accompagnement' ? '/representation-accompagnement' : '/etudes-data-intelligence',
    };
  };

  const service = serviceId ? getServiceData(serviceId) : null;

  React.useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        event.preventDefault();
        onClose();
      }
    };

    const preventScroll = (e: TouchEvent) => e.preventDefault();

    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.addEventListener("keydown", handleEscKey, true);
      document.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
        document.removeEventListener("keydown", handleEscKey, true);
        document.removeEventListener("touchmove", preventScroll);
      };
    }
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed inset-4 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
              {/* Left: Visual hero */}
              <div className="relative h-52 md:h-auto md:min-h-[420px] bg-gray-100">
                {service.imageSrc && (
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.35)] to-transparent md:from-[rgba(0,0,0,0.45)]" />

                <div className="absolute left-6 bottom-6 text-white md:left-8 md:bottom-8">
                  <h3 className="text-lg md:text-2xl font-semibold drop-shadow">
                    {service.title}
                  </h3>
                  {service.pricing && (
                    <div
                      className="mt-2 inline-block text-sm md:text-base font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(var(--color-white-rgb), 0.12)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {service.pricing}
                    </div>
                  )}
                </div>

                <button
                  onClick={onClose}
                  aria-label={t("models.serviceModal.close")}
                  className="absolute left-4 top-4 w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center shadow-sm hover:bg-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-gray-700" />
                </button>
              </div>

              {/* Right: Content */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex-1">
                  <h2
                    id="service-modal-title"
                    className="text-lg md:text-xl font-bold text-gray-800"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && (
                    <ul className="mt-5 grid grid-cols-1 gap-3">
                      {(service.features as unknown as string[]).map((feat: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[color:var(--color-accent)] text-white">
                            <Check className="w-4 h-4" />
                          </span>
                          <span className="text-sm text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(
                        () =>
                          openModal("service", { serviceName: service.title }),
                        120
                      );
                    }}
                    className="flex-1 px-4 py-3 rounded-xl text-white font-semibold cursor-pointer hover:scale-105 transition-all duration-200"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    {t("models.serviceModal.bookNow")}
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      if (service?.pageLink) {
                        router.push(service.pageLink);
                      }
                    }}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 bg-white font-medium hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                  >
                    {t("models.serviceModal.learnMore")}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
