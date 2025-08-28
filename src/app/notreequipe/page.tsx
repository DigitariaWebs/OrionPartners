"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TeamModel, { TeamMember } from "@/components/models/TeamModel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Target,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

export default function NotreEquipePage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Gisèle Kabwende",
      title: "Avocate Associée",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description:
        "Mme. Gisèle est Consultante au sein de OrionPartners. Elle se spécialise dans l'accompagnement stratégique à l'intersection du droit public, du droit des affaires et des processus institutionnels. Sa mission est de sécuriser les opérations et les investissements de nos clients en transformant les complexités réglementaires et administratives congolaises en opportunités claires et maîtrisées.",
      expertise: "Droit public, Droit des affaires, Réforme institutionnelle",
      education:
        "Certification en Droit Minier et des Hydrocarbures (IQAI), Licence en Droit (Université de Kinshasa)",
      experience: "Conseillère Juridique à la CENI et à l'Assemblée Nationale",
    },
    {
      name: "Ferdinand Ntambwe",
      title: "MA, Consultant",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description:
        "Ferdinand est Consultant au sein de OrionPartners. Il se consacre à l'accompagnement des organisations publiques, communautaires et privées, en apportant des solutions rigoureuses et adaptées à leurs enjeux stratégiques et financiers.",
      expertise:
        "Analyse de politiques publiques, Gestion de projets sociaux, Finances publiques",
      education: "Maîtrise en Finances Publiques (Université Laval)",
      experience:
        "Institut de recherche en économie contemporaine, Organisations communautaires",
    },
    {
      name: "Nonce Dede",
      title: "LLM, Consultant",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description:
        "Nonce est Consultant au sein de OrionPartners, où il apporte une expertise juridique de premier plan sur les enjeux nationaux et transnationaux. Il se spécialise dans la sécurisation des opérations commerciales et des investissements.",
      expertise:
        "Droit international des affaires, Rédaction contractuelle, Contentieux",
      education:
        "Maîtrise en droit international (Université de Montréal), Certification en rédaction des contrats (Université de Genève)",
      experience:
        "Avocat en litige, Auxiliaire d'enseignement (Université de Kinshasa)",
    },
    {
      name: "Arouna O. Lekoyo",
      title: "Ph.D. (c.), Consultant",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description:
        "Arouna est Consultant au sein de OrionPartners. Il se spécialise dans la modélisation économique et l'analyse quantitative pour évaluer l'impact des politiques publiques et des réformes stratégiques.",
      expertise:
        "Modélisation économique, Analyse quantitative, Simulation macroéconomique",
      education:
        "Doctorant en économie (Université Laval), Ingénieur Statisticien Économiste (ISSEA)",
      experience: "Direction Générale des Affaires Économiques du Bénin",
    },
  ];

  const strategies = [
    {
      icon: Target,
      title: "Excellence Opérationnelle",
      description: "Transformer les défis en opportunités stratégiques",
    },
    {
      icon: Lightbulb,
      title: "Innovation Continue",
      description: "Anticiper les tendances et innover pour nos clients",
    },
    {
      icon: Award,
      title: "Impact Durable",
      description: "Créer de la valeur à long terme pour nos clients",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#095797] via-[#0a5fa3] to-[#095797] text-white min-h-screen flex items-start pt-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Notre équipe - OrionPartners"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 w-full">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <motion.p
              className="text-lg md:text-xl text-blue-100 mb-6"
              {...fadeInUp}
            >
              Rencontrez l&apos;équipe
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8"
              {...fadeInUp}
            >
              Notre équipe
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              {...fadeInUp}
            >
              OrionPartners capitalise sur une équipe d&apos;associés et des
              consultants expérimentés, unis pour mener à bien ses missions.
              C&apos;est en unissant nos forces complémentaires que nous offrons le
              plus de valeur à nos clients. Notre rigueur et notre esprit
              d&apos;équipe font de nous une organisation dynamique et avant-gardiste
              qui se distingue.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              {...fadeInUp}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("team-members")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-[#9ac322] hover:bg-[#8ab01e] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                En savoir plus
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team-members" className="py-20 md:py-24 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#095797] mb-6">
              Nos experts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les profils de nos consultants et associés, chacun
              apportant son expertise unique pour servir nos clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-[500px] flex flex-col"
                variants={fadeInUp}
              >
                <div className="relative flex-shrink-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#9ac322] font-medium">{member.title}</p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 line-clamp-4 leading-relaxed text-sm">
                      {member.description}
                    </p>

                    <div className="space-y-2">
                      <div>
                        <h4 className="font-semibold text-[#095797] text-sm mb-1">
                          Expertise
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {member.expertise}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#095797] text-sm mb-1">
                          Formation
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {member.education}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedMember(member)}
                    className="w-full bg-[#095797] hover:bg-[#0a5fa3] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    Voir Plus
                    <ChevronRight className="w-4 h-4 hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conseil - Strategie de Croissance Section */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#095797] mb-6">
              Conseil - Stratégie de Croissance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre approche stratégique pour accompagner votre développement
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                variants={fadeInUp}
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#9ac322] to-[#8ab01e] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <strategy.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#095797] mb-4 group-hover:text-[#0a5fa3] transition-colors">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{strategy.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Member Modal */}
      <TeamModel
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />

      <Footer />
    </div>
  );
}
