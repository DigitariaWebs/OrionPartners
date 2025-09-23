"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import Image from "next/image";

export type TeamMember = {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  briefDescription: string;
  description: string;
  email: string;
  expertise: string;
  education: string;
  experience: string;
};

interface TeamModelProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
}

export default function TeamModel({ isOpen, onClose, member }: TeamModelProps) {
  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-4 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Left: Image */}
                <div className="md:col-span-1">
                  <div className="relative h-64 md:h-full min-h-[400px] rounded-l-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Contact Icons in Image */}
                    <div className="absolute bottom-4 right-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#9ac322] transition-colors cursor-pointer group/icon"
                      >
                        <Mail className="w-6 h-6 text-white group-hover/icon:text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-2 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-[#095797] mb-2">
                        {member.name}
                      </h2>
                      {member.title && (
                        <p className="text-[#9ac322] font-semibold text-lg">
                          {member.title}
                        </p>
                      )}
                      <p className="text-gray-600 font-medium text-base">
                        {member.subtitle}
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-[#095797] hover:text-[#9ac322] transition-colors cursor-pointer"
                        >
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">{member.email}</span>
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#095797] mb-3">
                        À propos
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#095797] mb-3">
                        Expertise
                      </h3>
                      <p className="text-gray-600">{member.expertise}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#095797] mb-3">
                        Formation
                      </h3>
                      <p className="text-gray-600">{member.education}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#095797] mb-3">
                        Expérience professionnelle
                      </h3>
                      <p className="text-gray-600">{member.experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
