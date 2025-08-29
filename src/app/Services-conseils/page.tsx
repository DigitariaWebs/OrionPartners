"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";

export default function ServicesConseilsPage() {
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

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#095797] via-[#0a5fa3] to-[#095797] text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/ServiceImages/ServicesConseils.png"
            alt="Services de Conseil Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#095797]/80 via-[#0a5fa3]/70 to-[#095797]/80"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <motion.div className="text-center max-w-4xl mx-auto" {...stagger}>
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              {...fadeInUp}
            >
              Services de Conseil
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed"
              {...fadeInUp}
            >
              Conseil stratégique, opérationnel et financier pour accompagner
              les entreprises à relever leurs défis complexes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              {...fadeInUp}
            >
              <Link href="/#contact">
                <button className="group bg-[#9ac322] hover:bg-[#8ab01e] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 cursor-pointer">
                  Nous contacter
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/#services">
                <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm cursor-pointer">
                  Découvrir nos services
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Bloc 1: Stratégie & Croissance */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23095797' fill-opacity='0.1'%3e%3cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-61-51c2.73 0 4.917-2.187 4.917-4.917 0-2.73-2.187-4.917-4.917-4.917C7.187 3.167 5 5.354 5 8.084c0 2.73 2.187 4.917 4.917 4.917zM20.167 72c2.73 0 4.917-2.187 4.917-4.917 0-2.73-2.187-4.917-4.917-4.917C17.437 62.167 15.25 64.354 15.25 67.084c0 2.73 2.187 4.917 4.917 4.917z'/%3e%3c/g%3e%3c/svg%3e")`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#095797]/10 text-[#095797] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Vision & Leadership
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-[#095797] mb-6">
                Stratégie & Croissance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                De la vision au leadership de marché
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-20">
              {/* Left Column - Image */}
              <motion.div
                className="lg:col-span-6 relative h-full"
                {...slideInLeft}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#095797] to-[#9ac322] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                    <Image
                      src="/ServiceImages/ServicesConseils.png"
                      alt="Stratégie & Croissance"
                      width={700}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#095797]/30 via-transparent to-transparent"></div>

                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#9ac322] rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#095797]">
                            100%
                          </div>
                          <div className="text-sm text-gray-600">
                            Taux de réussite
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                className="lg:col-span-6 flex flex-col justify-center"
                {...slideInRight}
              >
                {/* Combined Challenge & Solution Section */}
                <div className="bg-gradient-to-br from-[#095797]/5 to-[#9ac322]/5 p-8 rounded-2xl border border-[#095797]/20 shadow-lg">
                  <div className="space-y-8">
                    {/* Challenge Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#095797] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            !
                          </span>
                        </div>
                        Le Défi
                      </h3>
                      <div className="space-y-4 text-gray-700 pl-11">
                        <p className="leading-relaxed">
                          <strong className="text-[#095797]">
                            Naviguer sans une carte claire
                          </strong>{" "}
                          est le plus grand des risques. Dans un marché
                          congolais dynamique, la stagnation guette les
                          entreprises qui opèrent au jour le jour.
                        </p>
                        <p className="leading-relaxed">
                          La pression concurrentielle, l&#39;évolution rapide des
                          attentes clients et le manque de recul stratégique
                          transforment les opportunités en menaces.{" "}
                          <strong className="text-[#095797]">
                            Vous avez la vision, mais le chemin pour y parvenir
                            reste flou.
                          </strong>
                        </p>
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#9ac322] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        Notre Solution
                      </h3>
                      <div className="pl-11">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          <strong className="text-[#9ac322]">
                            Nous transformons l&#39;incertitude en un plan d&#39;action.
                          </strong>{" "}
                          Nous ne vous donnons pas un rapport théorique, mais
                          une feuille de route claire pour dominer votre marché.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Expertises Section */}
            <motion.div className="space-y-8" {...fadeInUp}>
              <div className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#095797] mb-4">
                  Nos Expertises Stratégiques
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Trois piliers fondamentaux pour votre réussite
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Expertise 1 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9ac322] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#095797] group-hover:text-[#9ac322] transition-colors">
                      Diagnostic Précis
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Nous plongeons au cœur de votre marché et de votre
                      organisation pour révéler les véritables leviers de
                      croissance et les freins cachés.
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target className="w-16 h-16 text-[#095797]" />
                  </div>
                </motion.div>

                {/* Expertise 2 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9ac322] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#095797] group-hover:text-[#9ac322] transition-colors">
                      Feuille de Route Actionnable
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Nous co-construisons avec vous une stratégie sur mesure,
                      avec des objectifs clairs et des initiatives priorisées
                      pour un impact maximal.
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-16 h-16 text-[#095797]" />
                  </div>
                </motion.div>

                {/* Expertise 3 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9ac322] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#095797] group-hover:text-[#9ac322] transition-colors">
                      Alignement de votre Équipe
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Nous nous assurons que votre stratégie est comprise et
                      portée par vos équipes, transformant le plan en une
                      véritable culture de la performance.
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16 text-[#095797]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloc 2: Représentation & Support Opérationnel */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23095797' fill-opacity='0.1'%3e%3cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-61-51c2.73 0 4.917-2.187 4.917-4.917 0-2.73-2.187-4.917-4.917-4.917C7.187 3.167 5 5.354 5 8.084c0 2.73 2.187 4.917 4.917 4.917zM20.167 72c2.73 0 4.917-2.187 4.917-4.917 0-2.73-2.187-4.917-4.917-4.917C17.437 62.167 15.25 64.354 15.25 67.084c0 2.73 2.187 4.917 4.917 4.917z'/%3e%3c/g%3e%3c/svg%3e")`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#095797]/10 text-[#095797] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Expertise Locale
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-[#095797] mb-6">
                Représentation & Support Opérationnel
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Votre partenaire de confiance pour une implantation et une
                expansion réussie en RDC
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-20">
              {/* Left Column - Image */}
              <motion.div
                className="lg:col-span-6 relative h-full"
                {...slideInLeft}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#095797] to-[#9ac322] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                    <Image
                      src="/ServiceImages/RepresentationAccompagnement.png"
                      alt="Représentation & Support Opérationnel"
                      width={700}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#095797]/30 via-transparent to-transparent"></div>

                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#9ac322] rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#095797]">
                            24/7
                          </div>
                          <div className="text-sm text-gray-600">
                            Support terrain
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                className="lg:col-span-6 flex flex-col justify-center"
                {...slideInRight}
              >
                {/* Combined Challenge & Solution Section */}
                <div className="bg-gradient-to-br from-[#095797]/5 to-[#9ac322]/5 p-8 rounded-2xl border border-[#095797]/20 shadow-lg">
                  <div className="space-y-8">
                    {/* Challenge Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#095797] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            !
                          </span>
                        </div>
                        Le Défi
                      </h3>
                      <div className="space-y-4 text-gray-700 pl-11">
                        <p className="leading-relaxed">
                          <strong className="text-[#095797]">
                            La complexité locale
                          </strong>{" "}
                          peut paralyser les projets les plus prometteurs. La
                          RDC offre des opportunités uniques, mais la distance,
                          les barrières culturelles et la complexité
                          administrative transforment souvent l&#39;ambition en
                          obstacle.
                        </p>
                        <p className="leading-relaxed">
                          Pour un investisseur ou une entreprise sans ancrage
                          local, le risque de retards, de surcoûts et d&#39;erreurs
                          stratégiques est immense.{" "}
                          <strong className="text-[#095797]">
                            Vous avez la vision, mais le terrain reste un
                            mystère.
                          </strong>
                        </p>
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#9ac322] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        Notre Solution
                      </h3>
                      <div className="pl-11">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          <strong className="text-[#9ac322]">
                            Nous sommes vos yeux, vos oreilles et votre bras
                            droit sur le terrain.
                          </strong>{" "}
                          Nous transformons la complexité locale en votre
                          avantage stratégique.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services Section */}
            <motion.div className="space-y-8" {...fadeInUp}>
              <div className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#095797] mb-4">
                  Nos Services de Terrain
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Trois piliers pour votre succès opérationnel
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9ac322] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#095797] group-hover:text-[#9ac322] transition-colors">
                      Facilitateur d&#39;Affaires
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Nous maîtrisons les rouages administratifs et
                      réglementaires pour accélérer votre implantation et
                      sécuriser vos opérations. Fini les blocages.
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target className="w-16 h-16 text-[#095797]" />
                  </div>
                </motion.div>

                {/* Service 2 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9ac322] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#095797] group-hover:text-[#9ac322] transition-colors">
                      Gestion de Projets Déléguée
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Nous pilotons vos projets avec rigueur, en assurant le
                      lien entre vos objectifs stratégiques et l&#39;exécution sur
                      le terrain.
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-16 h-16 text-[#095797]" />
                  </div>
                </motion.div>

                {/* Service 3 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9ac322] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#095797] group-hover:text-[#9ac322] transition-colors">
                      Défense de Vos Intérêts
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Nous agissons avec une loyauté absolue pour représenter et
                      défendre vos intérêts auprès des partenaires locaux.
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16 text-[#095797]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloc 3: Private Equity */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23095797' fill-opacity='0.1'%3e%3cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-61-51c2.73 0 4.917-2.187 4.917-4.917 0-2.73-2.187-4.917-4.917-4.917C7.187 3.167 5 5.354 5 8.084c0 2.73 2.187 4.917 4.917 4.917zM20.167 72c2.73 0 4.917-2.187 4.917-4.917 0-2.73-2.187-4.917-4.917-4.917C17.437 62.167 15.25 64.354 15.25 67.084c0 2.73 2.187 4.917 4.917 4.917z'/%3e%3c/g%3e%3c/svg%3e")`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#095797]/10 text-[#095797] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Capital & Growth
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-[#095797] mb-6">
                Private Equity
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Nous connectons le capital à la croissance
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-20">
              {/* Left Column - Image */}
              <motion.div
                className="lg:col-span-6 relative h-full"
                {...slideInLeft}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#095797] to-[#9ac322] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                    <Image
                      src="/ServiceImages/ComptabiliteCertification.png"
                      alt="Private Equity"
                      width={700}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#095797]/30 via-transparent to-transparent"></div>

                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#9ac322] rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#095797]">
                            ROI
                          </div>
                          <div className="text-sm text-gray-600">Optimisé</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                className="lg:col-span-6 flex flex-col justify-center"
                {...slideInRight}
              >
                {/* Combined Challenge & Solution Section */}
                <div className="bg-gradient-to-br from-[#095797]/5 to-[#9ac322]/5 p-8 rounded-2xl border border-[#095797]/20 shadow-lg">
                  <div className="space-y-8">
                    {/* Challenge Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#095797] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            !
                          </span>
                        </div>
                        Le Défi
                      </h3>
                      <div className="space-y-4 text-gray-700 pl-11">
                        <p className="leading-relaxed">
                          <strong className="text-[#095797]">
                            Le paradoxe congolais
                          </strong>{" "}
                          freine le développement économique. Un potentiel
                          immense mais un accès limité au capital transforme les
                          opportunités en contraintes.
                        </p>
                        <p className="leading-relaxed">
                          Les sources de financement traditionnelles ne
                          suffisent plus à soutenir l&apos;innovation et la
                          croissance structurelle.{" "}
                          <strong className="text-[#095797]">
                            Le capital intelligent reste inaccessible aux
                            projets porteurs.
                          </strong>
                        </p>
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#9ac322] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        Notre Solution
                      </h3>
                      <div className="pl-11">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          <strong className="text-[#9ac322]">
                            Nous sommes le pont entre les opportunités
                            d&#39;investissement et les capitaux intelligents.
                          </strong>{" "}
                          Notre conviction est que le Private Equity est le
                          levier stratégique pour transformer ce potentiel en
                          performance économique durable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services Section */}
            <motion.div className="space-y-8" {...fadeInUp}>
              <div className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#095797] mb-4">
                  Notre Approche Rigoureuse
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Trois étapes pour maximiser la valeur
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9ac322] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#095797] group-hover:text-[#9ac322] transition-colors">
                      Diagnostic Stratégique & Viabilité
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Analyse exhaustive du modèle économique pour identifier
                      les véritables leviers de croissance et les risques
                      cachés.
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target className="w-16 h-16 text-[#095797]" />
                  </div>
                </motion.div>

                {/* Service 2 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9ac322] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#095797] group-hover:text-[#9ac322] transition-colors">
                      Due Diligence Intégrale
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Vérification rigoureuse des aspects légaux, financiers et
                      opérationnels pour sécuriser l&#39;investissement.
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-16 h-16 text-[#095797]" />
                  </div>
                </motion.div>

                {/* Service 3 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#9ac322]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9ac322] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#095797] group-hover:text-[#9ac322] transition-colors">
                      Validation par le Marché & les Experts
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Confrontation de la thèse d&#39;investissement à la réalité du
                      terrain pour maximiser les chances de succès.
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16 text-[#095797]" />
                  </div>
                </motion.div>
              </div>

              {/* Target Audience Section */}
              <motion.div className="mt-16" {...fadeInUp}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#095797] mb-4">
                    Notre Double Expertise
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-[#9ac322]/10 to-[#9ac322]/5 p-6 rounded-2xl border border-[#9ac322]/20">
                    <h4 className="text-lg font-bold text-[#095797] mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#9ac322] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">E</span>
                      </div>
                      Pour les entrepreneurs
                    </h4>
                    <p className="text-gray-600">
                      Nous transformons votre vision en projet &quot;investissable&quot;.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#095797]/10 to-[#095797]/5 p-6 rounded-2xl border border-[#095797]/20">
                    <h4 className="text-lg font-bold text-[#095797] mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#095797] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">I</span>
                      </div>
                      Pour les investisseurs
                    </h4>
                    <p className="text-gray-600">
                      Nous transformons l&#39;incertitude du marché en avantage
                      compétitif.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Solutions sur Mesure Section - Tabbed Interface */}
              <motion.div className="mt-20" {...fadeInUp}>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#095797]/10 text-[#095797] px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target className="w-4 h-4" />
                    Solutions Interactives
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                    Nos Solutions sur Mesure
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Nous connectons le capital à la croissance
                  </p>
                </div>

                {/* Tabbed Interface */}
                <div className="max-w-6xl mx-auto">
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {/* Tab Headers */}
                    <div className="flex border-b border-gray-200">
                      <button
                        className="flex-1 py-6 px-8 text-center font-semibold text-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
                        onClick={() => {
                          const tab1 =
                            document.getElementById("tab-enterprises");
                          const tab2 = document.getElementById("tab-investors");
                          const btn1 =
                            document.getElementById("btn-enterprises");
                          const btn2 = document.getElementById("btn-investors");

                          if (tab1 && tab2 && btn1 && btn2) {
                            tab1.classList.remove("hidden");
                            tab2.classList.add("hidden");
                            btn1.classList.add(
                              "text-[#9ac322]",
                              "bg-[#9ac322]/5"
                            );
                            btn1.classList.remove("text-gray-600");
                            btn2.classList.remove(
                              "text-[#095797]",
                              "bg-[#095797]/5"
                            );
                            btn2.classList.add("text-gray-600");
                          }
                        }}
                        id="btn-enterprises"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-10 h-10 bg-[#9ac322] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-white text-sm font-bold">
                              E
                            </span>
                          </div>
                          <span>Pour les Entreprises</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#9ac322] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </button>

                      <button
                        className="flex-1 py-6 px-8 text-center font-semibold text-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
                        onClick={() => {
                          const tab1 =
                            document.getElementById("tab-enterprises");
                          const tab2 = document.getElementById("tab-investors");
                          const btn1 =
                            document.getElementById("btn-enterprises");
                          const btn2 = document.getElementById("btn-investors");

                          if (tab1 && tab2 && btn1 && btn2) {
                            tab2.classList.remove("hidden");
                            tab1.classList.add("hidden");
                            btn2.classList.add(
                              "text-[#095797]",
                              "bg-[#095797]/5"
                            );
                            btn2.classList.remove("text-gray-600");
                            btn1.classList.remove(
                              "text-[#9ac322]",
                              "bg-[#9ac322]/5"
                            );
                            btn1.classList.add("text-gray-600");
                          }
                        }}
                        id="btn-investors"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-10 h-10 bg-[#095797] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-white text-sm font-bold">
                              I
                            </span>
                          </div>
                          <span>Pour les Investisseurs</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#095797] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </button>
                    </div>

                    {/* Tab Content */}
                    <div className="p-8 lg:p-12">
                      {/* Enterprises Tab */}
                      <div id="tab-enterprises" className="space-y-8">
                        <div className="text-center mb-12">
                          <h4 className="text-3xl font-bold text-[#095797] mb-4">
                            Devenez une évidence pour les investisseurs
                          </h4>
                          <p className="text-lg text-gray-600">
                            Un accompagnement complet vers le financement réussi
                          </p>
                        </div>

                        {/* Interactive Timeline */}
                        <div className="relative">
                          {/* Timeline Line */}
                          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#9ac322] to-[#9ac322]/30"></div>

                          <div className="space-y-12">
                            {/* Step 1 */}
                            <motion.div
                              className="relative flex items-start gap-8 group"
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-16 h-16 bg-[#9ac322] rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg">
                                1
                              </div>
                              <div className="flex-1 bg-gradient-to-r from-[#9ac322]/5 to-transparent rounded-2xl p-8 border-l-4 border-[#9ac322] group-hover:shadow-lg transition-shadow">
                                <h5 className="text-2xl font-bold text-[#095797] mb-3 group-hover:text-[#9ac322] transition-colors">
                                  Préparation Stratégique (Investment Readiness)
                                </h5>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                  Nous forgeons avec vous un dossier
                                  d&#39;investissement irréprochable : business plan
                                  affûté, stratégie clarifiée et financials
                                  fiabilisés pour capter l&#39;attention et la
                                  confiance.
                                </p>
                              </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                              className="relative flex items-start gap-8 group"
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-16 h-16 bg-[#9ac322] rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg">
                                2
                              </div>
                              <div className="flex-1 bg-gradient-to-r from-[#9ac322]/5 to-transparent rounded-2xl p-8 border-l-4 border-[#9ac322] group-hover:shadow-lg transition-shadow">
                                <h5 className="text-2xl font-bold text-[#095797] mb-3 group-hover:text-[#9ac322] transition-colors">
                                  Valorisation & Modélisation
                                </h5>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                  Nous objectivons la valeur de votre entreprise
                                  et projetons son potentiel de croissance à
                                  travers des modèles financiers robustes qui
                                  justifient votre demande de financement.
                                </p>
                              </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                              className="relative flex items-start gap-8 group"
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-16 h-16 bg-[#9ac322] rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg">
                                3
                              </div>
                              <div className="flex-1 bg-gradient-to-r from-[#9ac322]/5 to-transparent rounded-2xl p-8 border-l-4 border-[#9ac322] group-hover:shadow-lg transition-shadow">
                                <h5 className="text-2xl font-bold text-[#095797] mb-3 group-hover:text-[#9ac322] transition-colors">
                                  Accès Stratégique au Capital
                                </h5>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                  Nous activons notre réseau de fonds de Private
                                  Equity et pilotons le processus de levée de
                                  fonds, en négociant les termes qui servent au
                                  mieux votre projet à long terme.
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Investors Tab */}
                      <div id="tab-investors" className="space-y-8 hidden">
                        <div className="text-center mb-12">
                          <h4 className="text-3xl font-bold text-[#095797] mb-4">
                            Déployez votre capital avec confiance et impact
                          </h4>
                          <p className="text-lg text-gray-600">
                            Un sourcing d&#39;opportunités d&#39;exception pour votre
                            portefeuille
                          </p>
                        </div>

                        {/* Interactive Timeline */}
                        <div className="relative">
                          {/* Timeline Line */}
                          <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-t from-[#095797] to-[#095797]/30"></div>

                          <div className="space-y-12">
                            {/* Step 1 */}
                            <motion.div
                              className="relative flex items-start gap-8 group"
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-1 bg-gradient-to-l from-[#095797]/5 to-transparent rounded-2xl p-8 border-r-4 border-[#095797] group-hover:shadow-lg transition-shadow">
                                <h5 className="text-2xl font-bold text-[#095797] mb-3 group-hover:text-[#9ac322] transition-colors">
                                  Deal Flow Exclusif & Qualifié
                                </h5>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                  Notre ancrage local nous permet de sourcer des
                                  opportunités à fort potentiel, souvent hors
                                  des radars traditionnels, vous donnant un
                                  accès prioritaire aux pépites de demain.
                                </p>
                              </div>
                              <div className="flex-shrink-0 w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg">
                                1
                              </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                              className="relative flex items-start gap-8 group"
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-1 bg-gradient-to-l from-[#095797]/5 to-transparent rounded-2xl p-8 border-r-4 border-[#095797] group-hover:shadow-lg transition-shadow">
                                <h5 className="text-2xl font-bold text-[#095797] mb-3 group-hover:text-[#9ac322] transition-colors">
                                  Due Diligence à 360°
                                </h5>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                  Nous menons des audits d&#39;acquisition complets
                                  (stratégiques, financiers, opérationnels) pour
                                  transformer le risque en certitude et valider
                                  chaque thèse d&#39;investissement.
                                </p>
                              </div>
                              <div className="flex-shrink-0 w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg">
                                2
                              </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                              className="relative flex items-start gap-8 group"
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-1 bg-gradient-to-l from-[#095797]/5 to-transparent rounded-2xl p-8 border-r-4 border-[#095797] group-hover:shadow-lg transition-shadow">
                                <h5 className="text-2xl font-bold text-[#095797] mb-3 group-hover:text-[#9ac322] transition-colors">
                                  Création de Valeur Active (Post-acquisition)
                                </h5>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                  Nous agissons comme votre partenaire
                                  opérationnel sur le terrain pour piloter la
                                  performance, mettre en œuvre les plans
                                  stratégiques et accélérer la création de
                                  valeur au sein de votre portefeuille.
                                </p>
                              </div>
                              <div className="flex-shrink-0 w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg">
                                3
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
