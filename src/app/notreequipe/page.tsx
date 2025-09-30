"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { Award, Target, Lightbulb, ChevronRight, Mail } from "lucide-react";
import { teamMembers } from "./data";

export default function NotreEquipePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

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
      <section
        className="relative overflow-hidden px-4 flex items-center justify-start"
        style={{ height: "calc(100vh - 72px)" }}
      >
        {/* Background Video with Parallax Effect */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
            }}
          ></div>
          {isVisible && (
            <motion.video
              src="/NotreEquipe/HeroSection.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10 }}
            />
          )}
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-[var(--color-primary)]/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[var(--color-accent)]/15 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative z-20 max-w-4xl px-12 sm:px-14 lg:px-16 text-left"
        >
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15]"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                fontSize: "clamp(1.875rem, 6vw, 4.5rem)",
                marginBottom: "1rem",
              }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Notre équipe
              </motion.span>
            </motion.h1>
          </motion.div>

          <div className="w-30 h-1 bg-[var(--color-accent)] my-7"></div>

          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Orion Conseil capitalise sur une équipe d&apos;associés et de
              consultants expérimentés, unis pour mener à bien ses missions.
              C&apos;est en unissant nos forces complémentaires que nous offrons
              le plus de valeur à nos clients. Notre rigueur et notre esprit
              d&apos;équipe font de nous une organisation dynamique et
              avant-gardiste qui se distingue.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-start"
          >
            <motion.div className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto shadow-xl"
                onClick={() => {
                  const teamMembers = document.getElementById("team-members");
                  if (teamMembers) {
                    teamMembers.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Découvrir l&apos;équipe
              </Button>
            </motion.div>

            <motion.div className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="min-w-[180px] w-full sm:w-auto border-2 border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-black backdrop-blur-sm bg-[var(--color-white)]/10"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contactez-nous
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="pt-16 md:pt-20 lg:pt-24 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.p
              className="text-sm font-semibold tracking-wider text-[#9ac322] uppercase mb-4"
              variants={fadeInUp}
            >
              Profils consultants
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-8"
              variants={fadeInUp}
            >
              Notre équipe
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-8 max-w-5xl mx-auto"
          >
            <motion.p
              className="text-base md:text-lg leading-relaxed text-gray-700 text-center"
              variants={fadeInUp}
            >
              Orion Conseil capitalise sur une équipe d&apos;associés et de
              consultants expérimentés, unis par une même culture de
              l&apos;excellence. C&apos;est en alliant nos forces
              complémentaires, issues de parcours diversifiés dans le conseil et
              l&apos;industrie, que nous créons le plus de valeur pour nos
              clients. Notre rigueur analytique, notre esprit collaboratif et
              notre engagement total font de nous bien plus qu&apos;un
              prestataire : un véritable partenaire de votre succès.
            </motion.p>

            <motion.div
              className="relative bg-gradient-to-br from-[#095797] to-[#0a5fa3] rounded-2xl p-8 md:p-12 shadow-xl"
              variants={fadeInUp}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Créer un impact réel, façonner votre avenir.
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-100">
                  Chez Orion Conseil, notre conviction est que seule
                  l&apos;excellence de nos équipes peut garantir des solutions
                  performantes, adaptées à vos besoins et conformes aux plus
                  hauts standards. C&apos;est pourquoi nous mobilisons une
                  équipe de haut calibre, alliant expertise de premier plan et
                  engagement total, pour vous accompagner sur vos défis les plus
                  complexes. Notre unique objectif : transformer vos enjeux
                  stratégiques, opérationnels et financiers en résultats
                  concrets et mesurables.
                </p>
              </div>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {teamMembers.slice(0, 10).map((member, index) => (
              <motion.div
                key={index}
                className="group flex flex-col"
                variants={fadeInUp}
              >
                <div className="relative flex justify-center pt-6">
                  <div className="relative w-48 h-48 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 grayscale"
                      style={{ objectPosition: "center 0%" }}
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="p-4 pb-2 text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#095797]">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-gray-600 font-medium text-sm">
                      {member.subtitle}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-[#095797]/10 hover:bg-[#9ac322] rounded-full flex items-center justify-center transition-colors cursor-pointer group/icon"
                      title={`Envoyer un email à ${member.name}`}
                    >
                      <Mail className="w-4 h-4 text-[#095797] group-hover/icon:text-white" />
                    </a>
                  </div>
                </div>

                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm line-clamp-4 text-justify">
                      {member.briefDescription}
                    </p>
                  </div>

                  <Link
                    href={`/notreequipe/${member.slug}`}
                    className="w-full bg-[#095797] hover:bg-[#0a5fa3] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    En savoir plus
                    <ChevronRight className="w-4 h-4 hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="pb-20 md:pb-24 lg:pb-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#095797] mb-6">
              Nos équipes supports
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez nos consultants associés qui renforcent notre équipe
              avec leur expertise spécialisée
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.slice(10).map((member, index) => (
              <motion.div
                key={index}
                className="group flex flex-col"
                variants={fadeInUp}
              >
                <div className="relative flex justify-center pt-6">
                  <div className="relative w-48 h-48 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 grayscale"
                      style={{ objectPosition: "center 0%" }}
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="p-4 pb-2 text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#095797]">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-gray-600 font-medium text-sm">
                      {member.subtitle}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-[#095797]/10 hover:bg-[#9ac322] rounded-full flex items-center justify-center transition-colors cursor-pointer group/icon"
                      title={`Envoyer un email à ${member.name}`}
                    >
                      <Mail className="w-4 h-4 text-[#095797] group-hover/icon:text-white" />
                    </a>
                  </div>
                </div>

                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm line-clamp-4 text-justify">
                      {member.briefDescription}
                    </p>
                  </div>

                  <Link
                    href={`/notreequipe/${member.slug}`}
                    className="w-full bg-[#095797] hover:bg-[#0a5fa3] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    En savoir plus
                    <ChevronRight className="w-4 h-4 hover:translate-x-1 transition-transform" />
                  </Link>
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
                  <p className="text-gray-600 leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
