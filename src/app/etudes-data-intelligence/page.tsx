"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Brain, Lightbulb, Target, Zap, Users } from "lucide-react";
import { useI18n } from "@/i18n/useI18n";

export default function EtudesDataIntelligencePage() {
  const { t } = useI18n();
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
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
      <section
        className="relative overflow-hidden px-4 flex items-center justify-start"
        style={{ height: "calc(100vh - 72px)" }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
            }}
          ></div>
          <Image
            src="/ServiceImages/etudes-data-intelligence.jpg"
            alt="Études & Data Intelligence Background"
            fill
            className="object-cover"
            priority
          />
        </div>

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
        <div className="relative z-20 max-w-4xl px-12 sm:px-14 lg:px-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15]"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                fontSize: "clamp(1.875rem, 6vw, 4.5rem)",
                marginBottom: "1rem",
              }}
            >
              {t("etudesDataIntelligence.hero.title")}
            </h1>
          </motion.div>

          <div className="w-30 h-1 bg-[var(--color-accent)] my-7"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl leading-relaxed"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
            >
              {t("etudesDataIntelligence.hero.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-start"
          >
            <Link href="/#contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group bg-[var(--color-accent)] hover:bg-[#8ab01e] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl cursor-pointer">
                {t("etudesDataIntelligence.hero.contactButton")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/#services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-black backdrop-blur-sm bg-[var(--color-white)]/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer">
                {t("etudesDataIntelligence.hero.expertiseButton")}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Business Intelligence Section */}
      <section className="pb-24 lg:pb-32 pt-25 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
              {t("etudesDataIntelligence.businessIntelligence.title")}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t("etudesDataIntelligence.businessIntelligence.description")}
            </p>
          </motion.div>

          {/* BI Examples */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Example 1: Analyse du recrutement */}
            <motion.div
              className="bg-gradient-to-br from-[#095797] to-[#0a5fa3] rounded-3xl p-8 text-white"
              {...fadeInUp}
            >
              <div className="w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">
                {t("etudesDataIntelligence.businessIntelligence.examples.recruitmentAnalysis.title")}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#095797] mb-2">
                    ⎯ The Client
                  </h4>
                  <p className="text-blue-100">
                    {t("etudesDataIntelligence.businessIntelligence.examples.recruitmentAnalysis.client")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#095797] mb-2">
                    ⎯ Problème
                  </h4>
                  <p className="text-blue-100">
                    {t("etudesDataIntelligence.businessIntelligence.examples.recruitmentAnalysis.problem")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#095797] mb-2">
                    ⎯ Notre Solution
                  </h4>
                  <p className="text-blue-100">
                    {t("etudesDataIntelligence.businessIntelligence.examples.recruitmentAnalysis.solution")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Example 2: Analyse Facturation */}
            <motion.div
              className="bg-gradient-to-br from-[#095797] to-[#0a5fa3] rounded-3xl p-8 text-white"
              {...fadeInUp}
            >
              <div className="w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">
                {t("etudesDataIntelligence.businessIntelligence.examples.billingAnalysis.title")}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#095797] mb-2">
                    ⎯ The Client
                  </h4>
                  <p className="text-blue-100">
                    {t("etudesDataIntelligence.businessIntelligence.examples.billingAnalysis.client")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#095797] mb-2">
                    ⎯ Problème
                  </h4>
                  <p className="text-blue-100">
                    {t("etudesDataIntelligence.businessIntelligence.examples.billingAnalysis.problem")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#095797] mb-2">
                    ⎯ Notre Solution
                  </h4>
                  <p className="text-blue-100">
                    {t("etudesDataIntelligence.businessIntelligence.examples.billingAnalysis.solution")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Science Section */}
      <section className="pb-24 lg:pb-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
              {t("etudesDataIntelligence.dataScience.title")}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              {t("etudesDataIntelligence.dataScience.description")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div {...slideInLeft}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#095797] mb-6">
                  {t("etudesDataIntelligence.dataScience.customModels.title")}
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-[#095797] mt-1 flex-shrink-0" />
                    <span>
                      {t("etudesDataIntelligence.dataScience.customModels.features.marketTrends")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-[#095797] mt-1 flex-shrink-0" />
                    <span>
                      {t("etudesDataIntelligence.dataScience.customModels.features.optimizeProcesses")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-[#095797] mt-1 flex-shrink-0" />
                    <span>
                      {t("etudesDataIntelligence.dataScience.customModels.features.customerBehavior")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-[#095797] mt-1 flex-shrink-0" />
                    <span>
                      {t("etudesDataIntelligence.dataScience.customModels.features.riskManagement")}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div {...slideInRight}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#095797] mb-6">
                  {t("etudesDataIntelligence.dataScience.competitiveAdvantages.title")}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t("etudesDataIntelligence.dataScience.competitiveAdvantages.description")}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#095797]/10 rounded-xl">
                    <div className="text-2xl font-bold text-[#095797]">95%</div>
                    <div className="text-sm text-gray-600">
                      {t("etudesDataIntelligence.dataScience.competitiveAdvantages.metrics.predictiveAccuracy")}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-[#095797]/10 rounded-xl">
                    <div className="text-2xl font-bold text-[#095797]">30%</div>
                    <div className="text-sm text-gray-600">
                      {t("etudesDataIntelligence.dataScience.competitiveAdvantages.metrics.efficiencyGain")}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Studies Section */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
              {t("etudesDataIntelligence.marketStudies.title")}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t("etudesDataIntelligence.marketStudies.description")}
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
                {t("etudesDataIntelligence.marketStudies.examples.digitalCommerce.title")}
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      {t("etudesDataIntelligence.marketStudies.examples.digitalCommerce.sections.context.title")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("etudesDataIntelligence.marketStudies.examples.digitalCommerce.sections.context.description")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      {t("etudesDataIntelligence.marketStudies.examples.digitalCommerce.sections.approach.title")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("etudesDataIntelligence.marketStudies.examples.digitalCommerce.sections.approach.description")}
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      {t("etudesDataIntelligence.marketStudies.examples.digitalCommerce.sections.results.title")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("etudesDataIntelligence.marketStudies.examples.digitalCommerce.sections.results.description")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      {t("etudesDataIntelligence.marketStudies.examples.digitalCommerce.sections.value.title")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("etudesDataIntelligence.marketStudies.examples.digitalCommerce.sections.value.description")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Study 2: Consumer Insights */}
            <motion.div
              className="bg-gradient-to-r from-[#095797]/5 to-[#034694]/5 rounded-3xl p-8 lg:p-12"
              {...fadeInUp}
            >
              <h3 className="text-3xl font-bold text-[#095797] mb-8">
                {t("etudesDataIntelligence.marketStudies.examples.consumerBehavior.title")}
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      {t("etudesDataIntelligence.marketStudies.examples.consumerBehavior.sections.context.title")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("etudesDataIntelligence.marketStudies.examples.consumerBehavior.sections.context.description")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      {t("etudesDataIntelligence.marketStudies.examples.consumerBehavior.sections.approach.title")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("etudesDataIntelligence.marketStudies.examples.consumerBehavior.sections.approach.description")}
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      {t("etudesDataIntelligence.marketStudies.examples.consumerBehavior.sections.results.title")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("etudesDataIntelligence.marketStudies.examples.consumerBehavior.sections.results.description")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#095797] mb-3">
                      {t("etudesDataIntelligence.marketStudies.examples.consumerBehavior.sections.value.title")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("etudesDataIntelligence.marketStudies.examples.consumerBehavior.sections.value.description")}
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
