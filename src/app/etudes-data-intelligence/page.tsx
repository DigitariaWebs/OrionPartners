"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Brain, Lightbulb, Target, Zap, Users } from "lucide-react";

export default function EtudesDataIntelligencePage() {
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#095797] via-[#0a5fa3] to-[#095797] text-white">
        <div className="absolute inset-0">
          <Image
            src="/ServiceImages/EtudesRecherches.png"
            alt="Études & Data Intelligence Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#095797]/80 via-[#0a5fa3]/70 to-[#095797]/80"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <motion.div className="text-center max-w-4xl mx-auto" {...stagger}>
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              {...fadeInUp}
            >
              Études & Data Intelligence
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed"
              {...fadeInUp}
            >
              Transformer vos données brutes en avantage concurrentiel.
            </motion.p>

            <motion.p
              className="text-lg text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto"
              {...fadeInUp}
            >
              Découvrez comment vos données peuvent révéler des opportunités
              cachées, anticiper les tendances du marché et prendre des
              décisions stratégiques avec confiance grâce à notre expertise en
              analyse de données.
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

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Business Intelligence Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#095797] mb-6">
              Business Intelligence (BI)
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Nous concevons des tableaux de bord interactifs et des rapports
              sur mesure pour vous permettre de visualiser vos performances en
              temps réel, de suivre vos indicateurs clés (KPIs) et de piloter
              votre activité avec une précision inégalée. Notre expertise sur
              les plateformes leaders du marché, telles que Microsoft Power BI,
              Qlik et Tableau, garantit des solutions puissantes et parfaitement
              intégrées à votre environnement.
            </p>
          </motion.div>

          {/* BI Examples */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Example 1: Analyse du recrutement */}
            <motion.div
              className="bg-gradient-to-br from-[#095797] to-[#0a5fa3] rounded-3xl p-8 text-white"
              {...fadeInUp}
            >
              <div className="w-16 h-16 bg-[#9ac322] rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">
                Analyse du recrutement
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#9ac322] mb-2">
                    ⎯ The Client
                  </h4>
                  <p className="text-blue-100">
                    Entreprise technologique en pleine croissance cherchant à
                    optimiser ses processus de recrutement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#9ac322] mb-2">
                    ⎯ Problème
                  </h4>
                  <p className="text-blue-100">
                    Difficulté à analyser l&apos;efficacité des canaux de
                    recrutement et à prévoir les besoins en personnel.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#9ac322] mb-2">
                    ⎯ Notre Solution
                  </h4>
                  <p className="text-blue-100">
                    Développement d&apos;un tableau de bord Power BI intégrant
                    les données RH, les performances des canaux et les
                    prévisions de recrutement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Example 2: Analyse Facturation */}
            <motion.div
              className="bg-gradient-to-br from-[#095797] to-[#0a5fa3] rounded-3xl p-8 text-white"
              {...fadeInUp}
            >
              <div className="w-16 h-16 bg-[#9ac322] rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Analyse Facturation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#9ac322] mb-2">
                    ⎯ The Client
                  </h4>
                  <p className="text-blue-100">
                    Société de services confrontée à des retards de paiement et
                    une trésorerie tendue.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#9ac322] mb-2">
                    ⎯ Problème
                  </h4>
                  <p className="text-blue-100">
                    Manque de visibilité sur les délais de paiement et les
                    risques de non-recouvrement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#9ac322] mb-2">
                    ⎯ Notre Solution
                  </h4>
                  <p className="text-blue-100">
                    Création d&apos;un système de suivi automatisé avec alertes
                    prédictives sur les risques de retard.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Science Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#095797] mb-6">
              Science des Données & Analyse Prédictive
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Allez au-delà des rapports : transformez vos données en avantage
              prédictif. Notre expertise en science des données vous permet de
              débloquer la valeur cachée dans vos informations pour prendre des
              décisions proactives.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div {...slideInLeft}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#095797] mb-6">
                  Nos Modèles Sur Mesure
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-[#9ac322] mt-1 flex-shrink-0" />
                    <span>
                      Anticiper les tendances du marché et les évolutions de la
                      demande.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-[#9ac322] mt-1 flex-shrink-0" />
                    <span>
                      Optimiser vos processus opérationnels, logistiques et
                      marketing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-[#9ac322] mt-1 flex-shrink-0" />
                    <span>
                      Décrypter les comportements clients pour améliorer la
                      rétention et la personnalisation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-[#9ac322] mt-1 flex-shrink-0" />
                    <span>
                      Maîtriser les risques et identifier les nouvelles
                      opportunités de croissance avec une longueur
                      d&apos;avance.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div {...slideInRight}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#9ac322] rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#095797] mb-6">
                  Avantages Concurrentiels
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Notre approche combine algorithmes avancés, machine learning
                  et expertise métier pour transformer vos données en insights
                  actionnables. Chaque modèle est calibré sur vos données
                  spécifiques pour garantir une précision maximale.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#095797]/10 rounded-xl">
                    <div className="text-2xl font-bold text-[#095797]">95%</div>
                    <div className="text-sm text-gray-600">
                      Précision prédictive
                    </div>
                  </div>
                  <div className="text-center p-4 bg-[#9ac322]/10 rounded-xl">
                    <div className="text-2xl font-bold text-[#9ac322]">30%</div>
                    <div className="text-sm text-gray-600">
                      Gain d&apos;efficacité
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Studies Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#095797] mb-6">
              Études de Marché & Veille Stratégique
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Nous menons des études qualitatives et quantitatives approfondies
              pour vous offrir une compréhension à 360° de votre environnement :
              analyse de la concurrence, attentes des clients, dynamiques de
              marché et opportunités de croissance.
            </p>
          </motion.div>

          {/* Market Study Examples */}
          <div className="space-y-16">
            {/* Study 1: Digital Commerce */}
            <motion.div
              className="bg-gradient-to-r from-[#095797]/5 to-[#0a5fa3]/5 rounded-3xl p-8 lg:p-12"
              {...fadeInUp}
            >
              <h3 className="text-3xl font-bold text-[#095797] mb-8">
                Étude du commerce numérique : transformation digitale du secteur
                retail à Kinshasa
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      Contexte
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Le secteur retail à Kinshasa connaît une transformation
                      digitale rapide avec l&apos;essor des marketplaces et du
                      e-commerce mobile.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      Notre approche
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Analyse des données transactionnelles, enquêtes
                      consommateurs, benchmarking des pratiques digitales
                      locales et internationales.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      Nos résultats
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Croissance de 300% du e-commerce en 3 ans, identification
                      des segments consommateurs les plus actifs (18-35 ans,
                      classe moyenne urbaine).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      La valeur pour notre client
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Stratégies omnicanal optimisées, identification
                      d&apos;opportunités d&apos;investissement dans la
                      logistique digitale et le paiement mobile.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Study 2: Consumer Insights */}
            <motion.div
              className="bg-gradient-to-r from-[#9ac322]/5 to-[#8ab01e]/5 rounded-3xl p-8 lg:p-12"
              {...fadeInUp}
            >
              <h3 className="text-3xl font-bold text-[#095797] mb-8">
                Étude comportement consommateur : évolution des préférences
                générationnelles à Kinshasa
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      Contexte
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Les consommateurs kinois connaissent une évolution rapide
                      de leurs comportements d&apos;achat influencés par la
                      digitalisation et les changements socio-économiques.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      Notre approche
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Enquête quantitative auprès de 1500 consommateurs, analyse
                      des données comportementales, segmentation par génération
                      et pouvoir d&apos;achat.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      Nos résultats
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Segmentation claire : génération Z privilégie
                      l&apos;expérience digitale (85% des achats mobiles),
                      millennials recherchent qualité/prix, génération X reste
                      fidèle aux circuits traditionnels.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      La valeur pour notre client
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Adaptation des stratégies marketing, développement de
                      produits ciblés, optimisation des canaux de distribution
                      digitale et physique.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
