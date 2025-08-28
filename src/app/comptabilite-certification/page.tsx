"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, BarChart3, Clock, Calculator, FileText, Users, TrendingUp } from "lucide-react";

export default function ComptabiliteCertificationPage() {
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
            src="/ServiceImages/ComptabiliteCertification.png"
            alt="Comptabilité & Certification Background"
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
              Comptabilité & Certification des comptes
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed"
              {...fadeInUp}
            >
              Transformer la conformité en performance.
            </motion.p>

            <motion.p
              className="text-lg text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto"
              {...fadeInUp}
            >
              Dans l&#39;environnement dynamique et exigeant de la République
              Démocratique du Congo, la gestion comptable et financière ne peut
              être une simple formalité. C&#39;est le socle sur lequel reposent vos
              décisions stratégiques, votre crédibilité auprès des partenaires
              et votre potentiel de croissance.
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

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
            <p className="text-xl text-gray-700 leading-relaxed">
              Notre mission est de vous fournir une image financière d&#39;une
              clarté absolue et une conformité inébranlable, pour que vous
              puissiez vous concentrer sur ce que vous faites de mieux : diriger
              et développer votre entreprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Partnership Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
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
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2 className="text-4xl lg:text-6xl font-bold text-[#095797] mb-6">
                Plus qu&apos;une comptabilité, un partenariat stratégique
              </h2>
            </motion.div>

            {/* Three Blocks */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Block 1: Conformité Inébranlable */}
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                {...fadeInUp}
              >
                <div className="w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#095797] mb-4">
                  Conformité Inébranlable : Votre Tranquillité d&#39;Esprit
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Naviguez avec sérénité dans le paysage réglementaire et fiscal
                  congolais (OHADA, DGI, CNSS, etc.). Notre expertise pointue
                  vous garantit des déclarations précises et ponctuelles, vous
                  mettant à l&apos;abri des pénalités et assurant la pérennité de vos
                  opérations.
                </p>
              </motion.div>

              {/* Block 2: Clarté Stratégique */}
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                {...fadeInUp}
              >
                <div className="w-16 h-16 bg-[#9ac322] rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#095797] mb-4">
                  Clarté Stratégique : Vos Données au Service de Vos Décisions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous transformons vos chiffres bruts en intelligence
                  d&#39;affaires. Grâce à des tableaux de bord sur mesure et des
                  rapports de gestion pertinents, vous ne subissez plus
                  l&apos;information : vous l&apos;utilisez pour piloter votre
                  performance, anticiper vos besoins de trésorerie et prendre
                  des décisions éclairées qui façonnent votre avenir.
                </p>
              </motion.div>

              {/* Block 3: Efficacité et Gain de Temps */}
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                {...fadeInUp}
              >
                <div className="w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#095797] mb-4">
                  Efficacité et Gain de Temps : Votre Énergie au Service de
                  Votre Cœur de Métier
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Déléguez la complexité, gardez le contrôle. Nous optimisons
                  vos processus comptables grâce à des méthodes rigoureuses et
                  des outils modernes. Libérez vos équipes des tâches
                  chronophages et réallouez leurs forces vives là où elles
                  créent le plus de valeur : au service de vos clients.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-6xl mx-auto" {...stagger}>
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                Nos Services Comptables
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div className="space-y-6" {...slideInLeft}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <Calculator className="w-8 h-8 text-[#9ac322] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        Tenue des livres comptables complète
                      </h3>
                      <p className="text-gray-600">
                        Saisie et traitement de vos opérations de manière
                        mensuelle, trimestrielle ou selon vos besoins.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <FileText className="w-8 h-8 text-[#9ac322] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        Préparation des états financiers annuels
                      </h3>
                      <p className="text-gray-600">
                        Établissement du bilan, du compte de résultat et des
                        annexes en conformité avec les normes SYSCOHADA.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-[#9ac322] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        Gestion des déclarations fiscales et sociales
                      </h3>
                      <p className="text-gray-600">
                        Préparation et dépôt de toutes vos déclarations (TVA,
                        IPR, IERE, etc.) pour une conformité parfaite.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="space-y-6" {...slideInRight}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <BarChart3 className="w-8 h-8 text-[#9ac322] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        Reporting de gestion et tableaux de bord dynamiques
                      </h3>
                      <p className="text-gray-600">
                        Conception de rapports personnalisés pour suivre vos
                        indicateurs de performance clés (KPIs).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-[#9ac322] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        Prévisions de trésorerie (Cash Flow Forecast)
                      </h3>
                      <p className="text-gray-600">
                        Modélisation de vos flux financiers pour anticiper et
                        sécuriser vos liquidités.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <FileText className="w-8 h-8 text-[#9ac322] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        Reporting financier et analyse de la performance
                      </h3>
                      <p className="text-gray-600">
                        Analyse approfondie de vos performances financières pour
                        une prise de décision éclairée.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payroll Management Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-6xl mx-auto" {...stagger}>
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#095797]/10 text-[#095797] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Gestion RH
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                Gestion de la Paie
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Sécurisez votre capital humain et libérez vos ressources
                stratégiques.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <motion.div {...slideInLeft}>
                <div className="relative h-full">
                  <Image
                    src="/ServiceImages/ComptabiliteCertification.png"
                    alt="Gestion de la Paie"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div {...slideInRight}>
                <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      En République Démocratique du Congo, la gestion de la paie
                      est bien plus qu&#39;une simple transaction mensuelle. C&#39;est
                      une fonction critique à la croisée du Code du Travail, des
                      exigences des organismes sociaux (CNSS, INPP, ONEM) et de
                      la satisfaction de vos employés. Les erreurs coûtent cher,
                      en pénalités comme en perte de confiance.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Notre mission est de transformer votre gestion de la paie
                      d&#39;un fardeau administratif complexe en un service d&#39;une
                      fiabilité absolue, vous garantissant conformité,
                      confidentialité et tranquillité d&#39;esprit.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-[#095797] mb-12 text-center">
                Nos services de gestion de la paie
              </h3>

              <div className="space-y-8">
                {/* First Row - Core Services */}
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#095797] transition-all duration-300"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calculator className="w-6 h-6 text-[#095797]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          Calcul des salaires
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Traitement précis de tous les éléments (fixe,
                          variable, avantages, absences).
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#9ac322] transition-all duration-300"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#9ac322]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-[#9ac322]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          Bulletins de paie
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Établissement de bulletins clairs et conformes pour
                          chaque employé.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#095797] transition-all duration-300"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-[#095797]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          Déclarations sociales
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Gestion mensuelle et trimestrielle (CNSS, INPP, ONEM).
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Second Row - Support Services */}
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#9ac322] transition-all duration-300"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#9ac322]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-[#9ac322]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          IPR & Impôts
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Calcul et déclaration de l&apos;Impôt Professionnel sur les
                          Rémunérations.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#095797] transition-all duration-300"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-[#095797]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          Administration RH
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Gestion des formalités d&apos;embauche et départ, soldes de
                          tout compte.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#9ac322] transition-all duration-300"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#9ac322]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-6 h-6 text-[#9ac322]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          Reportings & États
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Production d&apos;états et reportings pour comptabilité et
                          contrôle de gestion.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tax Compliance Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-6xl mx-auto" {...stagger}>
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#095797]/10 text-[#095797] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Fiscalité
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                Conformité Fiscale
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <motion.div {...slideInRight}>
                <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Dans un environnement où la pression fiscale est
                      croissante et les réglementations complexes, la conformité
                      n&#39;est pas une option, c&#39;est un impératif de gouvernance.
                      Pour les entreprises opérant en RDC, naviguer dans les
                      méandres des exigences de la Direction Générale des Impôts
                      (DGI) requiert une vigilance et une expertise constantes.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Notre mission est de sécuriser votre entreprise face à
                      cette complexité, en transformant la contrainte fiscale en
                      un élément maîtrisé et optimisé de votre stratégie
                      financière.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...slideInLeft}>
                <div className="relative h-full">
                  <Image
                    src="/ServiceImages/ComptabiliteCertification.png"
                    alt="Conformité Fiscale"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-[#095797] mb-12 text-center">
                Nos services fiscaux complets
              </h3>

              <div className="space-y-12">
                {/* Hero Service Cards */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <motion.div
                    className="group relative overflow-hidden bg-gradient-to-br from-[#095797] via-[#0a5fa3] to-[#095797] rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
                    {...fadeInUp}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">
                            Déclarations Fiscales
                          </h4>
                          <p className="text-blue-100">
                            Complètes & Ponctuelles
                          </p>
                        </div>
                      </div>
                      <p className="text-blue-50 leading-relaxed mb-6">
                        Préparation et dépôt de toutes vos déclarations fiscales
                        périodiques et annuelles (TVA, IPR, IERE, etc.) avec une
                        précision absolue.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-blue-200">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Conformité garantie</span>
                      </div>
                    </div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    className="group relative overflow-hidden bg-gradient-to-br from-[#9ac322] via-[#8ab01e] to-[#9ac322] rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
                    {...fadeInUp}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">
                            Contrôles Fiscaux
                          </h4>
                          <p className="text-green-100">
                            Assistance & Représentation
                          </p>
                        </div>
                      </div>
                      <p className="text-green-50 leading-relaxed mb-6">
                        Accompagnement personnalisé lors des contrôles fiscaux
                        avec notre équipe d&#39;experts spécialisés.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-green-200">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Protection optimale</span>
                      </div>
                    </div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>
                  </motion.div>
                </div>

                {/* Service Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#095797] hover:shadow-xl transition-all duration-300 group"
                    {...fadeInUp}
                  >
                    <div className="text-center space-y-4">
                      <div className="w-14 h-14 bg-[#095797]/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-[#095797] transition-colors duration-300">
                        <TrendingUp className="w-7 h-7 text-[#095797] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="text-lg font-bold text-[#095797]">
                        Revue de Conformité
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Diagnostic complet de votre situation fiscale pour
                        identifier et corriger les risques.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#9ac322] hover:shadow-xl transition-all duration-300 group"
                    {...fadeInUp}
                  >
                    <div className="text-center space-y-4">
                      <div className="w-14 h-14 bg-[#9ac322]/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-[#9ac322] transition-colors duration-300">
                        <BarChart3 className="w-7 h-7 text-[#9ac322] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="text-lg font-bold text-[#095797]">
                        Conseil Fiscal
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Conseil permanent sur vos opérations courantes et
                        projets stratégiques.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#095797] hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1"
                    {...fadeInUp}
                  >
                    <div className="text-center space-y-4">
                      <div className="w-14 h-14 bg-[#095797]/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-[#095797] transition-colors duration-300">
                        <Calculator className="w-7 h-7 text-[#095797] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="text-lg font-bold text-[#095797]">
                        Optimisation TVA
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Gestion stratégique de la Taxe sur la Valeur Ajoutée
                        pour optimiser votre trésorerie.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#9ac322] hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-2"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#9ac322]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#9ac322] transition-colors duration-300">
                        <Users className="w-6 h-6 text-[#9ac322] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          Relation DGI
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Gestion proactive de vos relations avec
                          l&#39;administration fiscale pour une collaboration fluide
                          et efficace.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-r from-[#095797]/5 to-[#9ac322]/5 rounded-2xl p-6 border-2 border-dashed border-gray-200 hover:border-[#095797] transition-all duration-300 group"
                    {...fadeInUp}
                  >
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-[#095797] transition-colors duration-300">
                        <Clock className="w-6 h-6 text-[#095797] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="text-lg font-bold text-[#095797]">
                        Accompagnement Sur-Mesure
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Une équipe dédiée à votre réussite fiscale
                      </p>
                      <Link href="/#contact">
                        <button className="mt-4 bg-[#095797] hover:bg-[#084a7a] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer">
                          Nous contacter
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      

      <Footer />
    </div>
  );
}
