"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, BarChart3, Clock, Calculator, FileText, Users, TrendingUp } from "lucide-react";
import { useI18n } from "@/i18n/useI18n";

export default function ComptabiliteCertificationPage() {
  const { t } = useI18n();
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
            src="/ServiceImages/comptabilite-certification.jpg"
            alt={t("comptabiliteCertification.imagesAlt.accountingCertification")}
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
              {t("comptabiliteCertification.hero.title")}
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
              {t("comptabiliteCertification.hero.description")}
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
                {t("comptabiliteCertification.hero.contactButton")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/#services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-black backdrop-blur-sm bg-[var(--color-white)]/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer">
                {t("comptabiliteCertification.hero.expertiseButton")}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t("comptabiliteCertification.mission")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Partnership Section */}
      <section className="pb-24 lg:pb-32 relative overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                {t("comptabiliteCertification.strategicPartnership.title")}
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
                  {t("comptabiliteCertification.strategicPartnership.blocks.compliance.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("comptabiliteCertification.strategicPartnership.blocks.compliance.description")}
                </p>
              </motion.div>

              {/* Block 2: Clarté Stratégique */}
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                {...fadeInUp}
              >
                <div className="w-16 h-16 bg-[#095797] rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#095797] mb-4">
                  {t("comptabiliteCertification.strategicPartnership.blocks.clarity.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("comptabiliteCertification.strategicPartnership.blocks.clarity.description")}
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
                  {t("comptabiliteCertification.strategicPartnership.blocks.efficiency.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("comptabiliteCertification.strategicPartnership.blocks.efficiency.description")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-6xl mx-auto" {...stagger}>
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                {t("comptabiliteCertification.services.title")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div className="space-y-6" {...slideInLeft}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <Calculator className="w-8 h-8 text-[#095797] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        {t("comptabiliteCertification.services.items.completeAccounting.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("comptabiliteCertification.services.items.completeAccounting.description")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <FileText className="w-8 h-8 text-[#095797] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        {t("comptabiliteCertification.services.items.annualFinancialStatements.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("comptabiliteCertification.services.items.annualFinancialStatements.description")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-[#095797] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        {t("comptabiliteCertification.services.items.taxSocialDeclarations.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("comptabiliteCertification.services.items.taxSocialDeclarations.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="space-y-6" {...slideInRight}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <BarChart3 className="w-8 h-8 text-[#095797] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        {t("comptabiliteCertification.services.items.managementReporting.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("comptabiliteCertification.services.items.managementReporting.description")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-[#095797] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        {t("comptabiliteCertification.services.items.cashFlowForecasts.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("comptabiliteCertification.services.items.cashFlowForecasts.description")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <FileText className="w-8 h-8 text-[#095797] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#095797] mb-2">
                        {t("comptabiliteCertification.services.items.financialReporting.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("comptabiliteCertification.services.items.financialReporting.description")}
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
      <section className="pb-24 lg:pb-32 pt-2 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-6xl mx-auto" {...stagger}>
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#095797]/10 text-[#095797] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                {t("comptabiliteCertification.payroll.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                {t("comptabiliteCertification.payroll.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("comptabiliteCertification.payroll.subtitle")}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <motion.div {...slideInLeft}>
                <div className="relative h-full">
                  <Image
                    src="/ServiceImages/GestionPaie.png"
                    alt={t("comptabiliteCertification.imagesAlt.payrollManagement")}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl h-100 object-fill"
                  />
                </div>
              </motion.div>

              <motion.div {...slideInRight}>
                <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t("comptabiliteCertification.payroll.description1")}
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t("comptabiliteCertification.payroll.description2")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-[#095797] mb-12 text-center">
                {t("comptabiliteCertification.payroll.servicesTitle")}
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
                          {t("comptabiliteCertification.payroll.services.salaryCalculation.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.payroll.services.salaryCalculation.description")}
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
                        <FileText className="w-6 h-6 text-[#095797]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          {t("comptabiliteCertification.payroll.services.paySlips.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.payroll.services.paySlips.description")}
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
                          {t("comptabiliteCertification.payroll.services.socialDeclarations.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.payroll.services.socialDeclarations.description")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Second Row - Support Services */}
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#095797] transition-all duration-300"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-[#095797]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          {t("comptabiliteCertification.payroll.services.iprTaxes.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.payroll.services.iprTaxes.description")}
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
                          {t("comptabiliteCertification.payroll.services.hrAdministration.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.payroll.services.hrAdministration.description")}
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
                        <BarChart3 className="w-6 h-6 text-[#095797]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          {t("comptabiliteCertification.payroll.services.reportsStates.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.payroll.services.reportsStates.description")}
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
      <section className="pb-24 lg:pb-32 pt-2 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-6xl mx-auto" {...stagger}>
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#095797]/10 text-[#095797] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                {t("comptabiliteCertification.taxCompliance.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                {t("comptabiliteCertification.taxCompliance.title")}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <motion.div {...slideInRight}>
                <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t("comptabiliteCertification.taxCompliance.description1")}
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t("comptabiliteCertification.taxCompliance.description2")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...slideInLeft}>
                <div className="relative h-full">
                  <Image
                    src="/ServiceImages/ConformitéFiscale.png"
                    alt={t("comptabiliteCertification.imagesAlt.taxCompliance")}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl h-100 object-fill"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-[#095797] mb-12 text-center">
                {t("comptabiliteCertification.taxCompliance.servicesTitle")}
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
                            {t("comptabiliteCertification.taxCompliance.heroServices.taxDeclarations.title")}
                          </h4>
                          <p className="text-blue-100">
                            {t("comptabiliteCertification.taxCompliance.heroServices.taxDeclarations.subtitle")}
                          </p>
                        </div>
                      </div>
                      <p className="text-blue-50 leading-relaxed mb-6">
                        {t("comptabiliteCertification.taxCompliance.heroServices.taxDeclarations.description")}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-blue-200">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{t("comptabiliteCertification.taxCompliance.heroServices.taxDeclarations.status")}</span>
                      </div>
                    </div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    className="group relative overflow-hidden bg-gradient-to-br from-[#095797] via-[#034694] to-[#095797] rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
                    {...fadeInUp}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">
                            {t("comptabiliteCertification.taxCompliance.heroServices.taxAudits.title")}
                          </h4>
                        </div>
                      </div>
                      <p className="text-green-50 leading-relaxed mb-6">
                        {t("comptabiliteCertification.taxCompliance.heroServices.taxAudits.description")}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-green-200">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{t("comptabiliteCertification.taxCompliance.heroServices.taxAudits.status")}</span>
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
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#095797] transition-colors duration-300">
                        <TrendingUp className="w-6 h-6 text-[#095797] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          {t("comptabiliteCertification.taxCompliance.additionalServices.complianceReview.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.taxCompliance.additionalServices.complianceReview.description")}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#095797] hover:shadow-xl transition-all duration-300 group"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#095797] transition-colors duration-300">
                        <BarChart3 className="w-6 h-6 text-[#095797] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          {t("comptabiliteCertification.taxCompliance.additionalServices.taxAdvice.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.taxCompliance.additionalServices.taxAdvice.description")}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#095797] hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#095797] transition-colors duration-300">
                        <Calculator className="w-6 h-6 text-[#095797] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          {t("comptabiliteCertification.taxCompliance.additionalServices.vatOptimization.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.taxCompliance.additionalServices.vatOptimization.description")}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#095797] hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-2"
                    {...fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#095797] transition-colors duration-300">
                        <Users className="w-6 h-6 text-[#095797] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#095797] mb-2">
                          {t("comptabiliteCertification.taxCompliance.additionalServices.dgiRelations.title")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t("comptabiliteCertification.taxCompliance.additionalServices.dgiRelations.description")}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-r from-[#095797]/5 to-[#095797]/5 rounded-2xl p-6 border-2 border-dashed border-gray-200 hover:border-[#095797] transition-all duration-300 group"
                    {...fadeInUp}
                  >
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-[#095797]/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-[#095797] transition-colors duration-300">
                        <Clock className="w-6 h-6 text-[#095797] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="text-lg font-bold text-[#095797]">
                        {t("comptabiliteCertification.taxCompliance.additionalServices.tailoredSupport.title")}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t("comptabiliteCertification.taxCompliance.additionalServices.tailoredSupport.description")}
                      </p>
                      <Link href="/#contact">
                        <button className="mt-4 bg-[#095797] hover:bg-[#084a7a] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer">
                          {t("comptabiliteCertification.taxCompliance.additionalServices.tailoredSupport.button")}
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
