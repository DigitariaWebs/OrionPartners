"use client";

import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import { use } from "react";
import { teamMembers } from "../data";


interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = use(params);
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
      <Header />

      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div className="py-4" {...fadeInUp}>
            <Link
              href="/notreequipe"
              className="inline-flex items-center gap-2 text-[#095797] hover:text-[#0a5fa3] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour à l&apos;équipe</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100%-4rem)]">
            {/* Left Column - Image and Contact - Fixed */}
            <motion.div
              className="lg:col-span-1 flex flex-col justify-center"
              {...fadeInUp}
            >
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center 0%" }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-[#095797] mb-2">
                    {member.name}
                  </h1>
                  <p className="text-gray-600 font-medium text-base mb-4">
                    {member.subtitle}
                  </p>

                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-3 bg-[#095797] hover:bg-[#0a5fa3] text-white px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contacter</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Scrollable Content */}
            <motion.div
              className="lg:col-span-2 overflow-y-auto pr-4"
              {...fadeInUp}
            >
              <div className="space-y-8 pb-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-[#095797] mb-4">
                    À propos
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {member.description}
                  </p>
                </div>

                {/* Expertise */}
                <div>
                  <h3 className="text-xl font-bold text-[#095797] mb-3">
                    Expertise
                  </h3>
                  <p className="text-gray-600">{member.expertise}</p>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xl font-bold text-[#095797] mb-3">
                    Formation
                  </h3>
                  <p className="text-gray-600">{member.education}</p>
                  <div className="mt-3 space-y-1">
                    <p className="text-gray-700">
                      <span className="font-semibold">Université:</span>{" "}
                      {member.university}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Pays:</span>{" "}
                      {member.country}
                    </p>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xl font-bold text-[#095797] mb-3">
                    Expérience professionnelle
                  </h3>
                  <p className="text-gray-600">{member.experience}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
