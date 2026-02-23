"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  FileText,
  Calculator,
  DollarSign,
  Search,
  CheckCircle,
  BarChart,
  Home,
} from "lucide-react";

export default function ServicesConseilsPage() {
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
            src="/ServiceImages/servicesconseils.jpg"
            alt={t("servicesConseils.imageAlt.servicesConseil")}
            fill
            className="object-cover"
            priority
            quality={100}
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
              {t("servicesConseils.hero.title")}
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
              {t("servicesConseils.hero.description")}
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
                {t("servicesConseils.hero.contactButton")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/#services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-black backdrop-blur-sm bg-[var(--color-white)]/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer">
                {t("servicesConseils.hero.expertiseButton")}
              </button>
            </Link>
          </motion.div>
        </div>
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
                {t("servicesConseils.strategyGrowth.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                {t("servicesConseils.strategyGrowth.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("servicesConseils.strategyGrowth.subtitle")}
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
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                    <Image
                      src="/ServiceImages/StratégieCroissance.png"
                      alt={t("servicesConseils.imageAlt.strategyGrowth")}
                      width={700}
                      height={500}
                      className="w-full h-115 object-cover object-bottom"
                    />
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
                        {t("servicesConseils.strategyGrowth.challengeTitle")}
                      </h3>
                      <div className="space-y-4 text-gray-700 pl-11">
                        <p className="leading-relaxed">
                          {t(
                            "servicesConseils.strategyGrowth.challengeDescription",
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#095797] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        {t("servicesConseils.strategyGrowth.solutionTitle")}
                      </h3>
                      <div className="pl-11">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t(
                            "servicesConseils.strategyGrowth.solutionDescription",
                          )}
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
                  {t("servicesConseils.strategyGrowth.expertiseTitle")}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("servicesConseils.strategyGrowth.expertiseSubtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Expertise 1 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.strategyGrowth.expertise.diagnostic.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.strategyGrowth.expertise.diagnostic.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Expertise 2 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.strategyGrowth.expertise.roadmap.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.strategyGrowth.expertise.roadmap.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Expertise 3 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.strategyGrowth.expertise.alignment.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.strategyGrowth.expertise.alignment.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloc 1.5: Conseil juridique */}
      <section className="pb-10 pt-4 lg:pt-12 relative overflow-hidden bg-gray-50">
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
                {t("servicesConseils.legalAdvice.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                {t("servicesConseils.legalAdvice.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("servicesConseils.legalAdvice.subtitle")}
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div className="space-y-8" {...fadeInUp}>
              {/* First row - 3 services */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service 1 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.legalAdvice.services.regulatoryCompliance.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.legalAdvice.services.regulatoryCompliance.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Service 2 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.legalAdvice.services.legalProjectSetup.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.legalAdvice.services.legalProjectSetup.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Service 3 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.legalAdvice.services.technicalLitigation.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.legalAdvice.services.technicalLitigation.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>
              </div>

              {/* Second row - 2 services centered */}
              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
                  {/* Service 4 */}
                  <motion.div
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                    whileHover={{ y: -5 }}
                    {...fadeInUp}
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      4
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                        {t(
                          "servicesConseils.legalAdvice.services.administrativePermits.title",
                        )}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t(
                          "servicesConseils.legalAdvice.services.administrativePermits.description",
                        )}
                      </p>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Target className="w-16 h-16 text-gray-800" />
                    </div>
                  </motion.div>

                  {/* Service 5 */}
                  <motion.div
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                    whileHover={{ y: -5 }}
                    {...fadeInUp}
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      5
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                        {t(
                          "servicesConseils.legalAdvice.services.tenderContracts.title",
                        )}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t(
                          "servicesConseils.legalAdvice.services.tenderContracts.description",
                        )}
                      </p>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <TrendingUp className="w-16 h-16 text-gray-800" />
                    </div>
                  </motion.div>
                </div>
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
                {t("servicesConseils.representationSupport.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                {t("servicesConseils.representationSupport.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("servicesConseils.representationSupport.subtitle")}
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
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                    <Image
                      src="/ServiceImages/ReprésentationSupportOpérationnel.png"
                      alt={t("servicesConseils.imageAlt.representationSupport")}
                      width={600}
                      height={500}
                      className="w-full h-115 object-fit "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#095797]/30 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                className="lg:col-span-6 flex flex-col justify-center"
                {...slideInRight}
              >
                {/* Combined Challenge & Solution Section */}
                <div className="bg-gradient-to-br from-[#095797]/5 to-[#095797]/5 p-8 rounded-2xl border border-[#095797]/20 shadow-lg">
                  <div className="space-y-8">
                    {/* Challenge Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#095797] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            !
                          </span>
                        </div>
                        {t(
                          "servicesConseils.representationSupport.challengeTitle",
                        )}
                      </h3>
                      <div className="space-y-4 text-gray-700 pl-11">
                        <p className="leading-relaxed">
                          {t(
                            "servicesConseils.representationSupport.challengeDescription",
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#095797] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        {t(
                          "servicesConseils.representationSupport.solutionTitle",
                        )}
                      </h3>
                      <div className="pl-11">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t(
                            "servicesConseils.representationSupport.solutionDescription",
                          )}
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
                  {t("servicesConseils.representationSupport.servicesTitle")}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("servicesConseils.representationSupport.servicesSubtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.representationSupport.expertise.facilitator.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.representationSupport.expertise.facilitator.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Service 2 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.representationSupport.expertise.projectManagement.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.representationSupport.expertise.projectManagement.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Service 3 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.representationSupport.expertise.interestDefense.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.representationSupport.expertise.interestDefense.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloc 3: Private Equity */}
      <section className="pb-24 lg:pb-32 relative overflow-hidden">
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
                {t("servicesConseils.privateEquity.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                {t("servicesConseils.privateEquity.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("servicesConseils.privateEquity.subtitle")}
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
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                    <Image
                      src="/ServiceImages/PrivateEquity.png"
                      alt={t("servicesConseils.imageAlt.privateEquity")}
                      width={700}
                      height={500}
                      className="w-full h-121 object-fill "
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                className="lg:col-span-6 flex flex-col justify-center"
                {...slideInRight}
              >
                {/* Combined Challenge & Solution Section */}
                <div className="bg-gradient-to-br from-[#095797]/5 to-[#095797]/5 p-8 rounded-2xl border border-[#095797]/20 shadow-lg">
                  <div className="space-y-8">
                    {/* Challenge Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#095797] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            !
                          </span>
                        </div>
                        {t("servicesConseils.privateEquity.challengeTitle")}
                      </h3>
                      <div className="space-y-4 text-gray-700 pl-11">
                        <p className="leading-relaxed">
                          {t(
                            "servicesConseils.privateEquity.challengeDescription",
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#095797] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        {t("servicesConseils.privateEquity.solutionTitle")}
                      </h3>
                      <div className="pl-11">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t(
                            "servicesConseils.privateEquity.solutionDescription",
                          )}
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
                  {t("servicesConseils.privateEquity.approachTitle")}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("servicesConseils.privateEquity.approachSubtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.privateEquity.expertise.diagnostic.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.privateEquity.expertise.diagnostic.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Service 2 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.privateEquity.expertise.dueDiligence.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.privateEquity.expertise.dueDiligence.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Service 3 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.privateEquity.expertise.validation.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.privateEquity.expertise.validation.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>
              </div>

              {/* Target Audience Section */}
              <motion.div className="mt-16" {...fadeInUp}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#095797] mb-4">
                    {t("servicesConseils.privateEquity.doubleExpertiseTitle")}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-[#095797]/10 to-[#095797]/5 p-6 rounded-2xl border border-[#095797]/20">
                    <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#095797] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {t(
                            "servicesConseils.privateEquity.entrepreneursAbbrev",
                          )}
                        </span>
                      </div>
                      {t("servicesConseils.privateEquity.forEntrepreneurs")}
                    </h4>
                    <p className="text-gray-600">
                      {t(
                        "servicesConseils.privateEquity.forEntrepreneursDescription",
                      )}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#095797]/10 to-[#095797]/5 p-6 rounded-2xl border border-[#095797]/20">
                    <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#095797] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {t("servicesConseils.privateEquity.investorsAbbrev")}
                        </span>
                      </div>
                      {t("servicesConseils.privateEquity.forInvestors")}
                    </h4>
                    <p className="text-gray-600">
                      {t(
                        "servicesConseils.privateEquity.forInvestorsDescription",
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Solutions sur Mesure Section - Tabbed Interface */}
              <motion.div className="mt-20" {...fadeInUp}>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#095797]/10 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target className="w-4 h-4" />
                    {t("servicesConseils.privateEquity.interactiveSolutions")}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                    {t("servicesConseils.privateEquity.tailoredSolutions")}
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {t("servicesConseils.privateEquity.connectCapitalGrowth")}
                  </p>
                </div>

                {/* Tabbed Interface */}
                <div className="max-w-6xl mx-auto">
                  <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
                    {/* Tab Headers */}
                    <div className="flex border-b border-gray-200">
                      <button
                        className="flex-1 py-3 px-2 sm:py-4 sm:px-4 md:py-6 md:px-8 text-center font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
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
                              "text-gray-700",
                              "bg-[#095797]/5",
                            );
                            btn1.classList.remove("text-gray-600");
                            btn2.classList.remove(
                              "text-gray-800",
                              "bg-[#095797]/5",
                            );
                            btn2.classList.add("text-gray-600");
                          }
                        }}
                        id="btn-enterprises"
                      >
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#095797] rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-white text-xs sm:text-sm font-bold">
                              {t(
                                "servicesConseils.privateEquity.entrepreneursAbbrev",
                              )}
                            </span>
                          </div>
                          <span className="hidden sm:inline">
                            {t(
                              "servicesConseils.privateEquity.enterprisesTab.title",
                            )}
                          </span>
                          <span className="sm:hidden">
                            {t(
                              "servicesConseils.privateEquity.enterprisesTab.titleShort",
                            )}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#095797] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </button>

                      <button
                        className="flex-1 py-3 px-2 sm:py-4 sm:px-4 md:py-6 md:px-8 text-center font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
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
                              "text-gray-800",
                              "bg-[#095797]/5",
                            );
                            btn2.classList.remove("text-gray-600");
                            btn1.classList.remove(
                              "text-gray-700",
                              "bg-[#095797]/5",
                            );
                            btn1.classList.add("text-gray-600");
                          }
                        }}
                        id="btn-investors"
                      >
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#095797] rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-white text-xs sm:text-sm font-bold">
                              {t(
                                "servicesConseils.privateEquity.investorsAbbrev",
                              )}
                            </span>
                          </div>
                          <span className="hidden sm:inline">
                            {t(
                              "servicesConseils.privateEquity.investorsTab.title",
                            )}
                          </span>
                          <span className="sm:hidden">
                            {t(
                              "servicesConseils.privateEquity.investorsTab.titleShort",
                            )}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#095797] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </button>
                    </div>

                    {/* Tab Content */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                      {/* Enterprises Tab */}
                      <div
                        id="tab-enterprises"
                        className="space-y-6 md:space-y-8"
                      >
                        <div className="text-center mb-8 md:mb-12">
                          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 px-2">
                            {t(
                              "servicesConseils.privateEquity.enterprisesTab.becomeEvidentTitle",
                            )}
                          </h4>
                          <p className="text-base sm:text-lg text-gray-600 px-2">
                            {t(
                              "servicesConseils.privateEquity.enterprisesTab.completeSupportDescription",
                            )}
                          </p>
                        </div>

                        {/* Interactive Timeline */}
                        <div className="relative">
                          {/* Timeline Line - Hidden on mobile, visible on md+ */}
                          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#095797] to-[#095797]/30"></div>

                          <div className="space-y-6 md:space-y-12">
                            {/* Step 1 */}
                            <motion.div
                              className="relative flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-8 group"
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#095797] rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                                <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                              </div>
                              <div className="flex-1 bg-gradient-to-r from-[#095797]/5 to-transparent rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-[#095797] group-hover:shadow-lg transition-shadow">
                                <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-[#095797] mb-2 md:mb-3 group-hover:text-gray-700 transition-colors">
                                  {t(
                                    "servicesConseils.privateEquity.enterprisesTab.steps.1.title",
                                  )}
                                </h5>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                  {t(
                                    "servicesConseils.privateEquity.enterprisesTab.steps.1.description",
                                  )}
                                </p>
                              </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                              className="relative flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-8 group"
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#095797] rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                                <Calculator className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                              </div>
                              <div className="flex-1 bg-gradient-to-r from-[#095797]/5 to-transparent rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-[#095797] group-hover:shadow-lg transition-shadow">
                                <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-[#095797] mb-2 md:mb-3 group-hover:text-gray-700 transition-colors">
                                  {t(
                                    "servicesConseils.privateEquity.enterprisesTab.steps.2.title",
                                  )}
                                </h5>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                  {t(
                                    "servicesConseils.privateEquity.enterprisesTab.steps.2.description",
                                  )}
                                </p>
                              </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                              className="relative flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-8 group"
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#095797] rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                                <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                              </div>
                              <div className="flex-1 bg-gradient-to-r from-[#095797]/5 to-transparent rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-[#095797] group-hover:shadow-lg transition-shadow">
                                <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-[#095797] mb-2 md:mb-3 group-hover:text-gray-700 transition-colors">
                                  {t(
                                    "servicesConseils.privateEquity.enterprisesTab.steps.3.title",
                                  )}
                                </h5>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                  {t(
                                    "servicesConseils.privateEquity.enterprisesTab.steps.3.description",
                                  )}
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Investors Tab */}
                      <div
                        id="tab-investors"
                        className="space-y-6 md:space-y-8 hidden"
                      >
                        <div className="text-center mb-8 md:mb-12">
                          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 px-2">
                            {t(
                              "servicesConseils.privateEquity.investorsTab.deployCapitalTitle",
                            )}
                          </h4>
                          <p className="text-base sm:text-lg text-gray-600 px-2">
                            {t(
                              "servicesConseils.privateEquity.investorsTab.sourcingOpportunitiesDescription",
                            )}
                          </p>
                        </div>

                        {/* Interactive Timeline */}
                        <div className="relative">
                          {/* Timeline Line - Hidden on mobile, visible on md+ */}
                          <div className="hidden md:block absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-t from-[#095797] to-[#095797]/30"></div>

                          <div className="space-y-6 md:space-y-12">
                            {/* Step 1 */}
                            <motion.div
                              className="relative flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-8 group"
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#095797] rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg md:order-2">
                                <Search className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                              </div>
                              <div className="flex-1 bg-gradient-to-r md:bg-gradient-to-l from-[#095797]/5 to-transparent rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 md:border-l-0 md:border-r-4 border-[#095797] group-hover:shadow-lg transition-shadow md:order-1">
                                <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-[#095797] mb-2 md:mb-3 group-hover:text-gray-700 transition-colors">
                                  {t(
                                    "servicesConseils.privateEquity.investorsTab.steps.1.title",
                                  )}
                                </h5>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                  {t(
                                    "servicesConseils.privateEquity.investorsTab.steps.1.description",
                                  )}
                                </p>
                              </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                              className="relative flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-8 group"
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#095797] rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg md:order-2">
                                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                              </div>
                              <div className="flex-1 bg-gradient-to-r md:bg-gradient-to-l from-[#095797]/5 to-transparent rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 md:border-l-0 md:border-r-4 border-[#095797] group-hover:shadow-lg transition-shadow md:order-1">
                                <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-[#095797] mb-2 md:mb-3 group-hover:text-gray-700 transition-colors">
                                  {t(
                                    "servicesConseils.privateEquity.investorsTab.steps.2.title",
                                  )}
                                </h5>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                  {t(
                                    "servicesConseils.privateEquity.investorsTab.steps.2.description",
                                  )}
                                </p>
                              </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                              className="relative flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-8 group"
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#095797] rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg md:order-2">
                                <BarChart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                              </div>
                              <div className="flex-1 bg-gradient-to-r md:bg-gradient-to-l from-[#095797]/5 to-transparent rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 md:border-l-0 md:border-r-4 border-[#095797] group-hover:shadow-lg transition-shadow md:order-1">
                                <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-[#095797] mb-2 md:mb-3 group-hover:text-gray-700 transition-colors">
                                  {t(
                                    "servicesConseils.privateEquity.investorsTab.steps.3.title",
                                  )}
                                </h5>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                  {t(
                                    "servicesConseils.privateEquity.investorsTab.steps.3.description",
                                  )}
                                </p>
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

      {/* Bloc 4: Expertise Immobilière */}
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
                <Home className="w-4 h-4" />
                {t("servicesConseils.realEstateExpertise.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095797] mb-6">
                {t("servicesConseils.realEstateExpertise.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("servicesConseils.realEstateExpertise.description")}
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
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                    <Image
                      src="/ServiceImages/ExpertiseImmobiliere.png"
                      alt={t("servicesConseils.imageAlt.realEstateExpertise")}
                      width={700}
                      height={500}
                      className="w-full h-115 object-cover object-bottom"
                    />
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
                        {t(
                          "servicesConseils.realEstateExpertise.challengeTitle",
                        )}
                      </h3>
                      <div className="space-y-4 text-gray-700 pl-11">
                        <p className="leading-relaxed">
                          {t(
                            "servicesConseils.realEstateExpertise.challengeDescription",
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#095797] flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#095797] rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        {t(
                          "servicesConseils.realEstateExpertise.solutionTitle",
                        )}
                      </h3>
                      <div className="pl-11">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t(
                            "servicesConseils.realEstateExpertise.solutionDescription",
                          )}
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
                  {t("servicesConseils.realEstateExpertise.expertiseTitle")}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("servicesConseils.realEstateExpertise.expertiseSubtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Expertise 1 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.realEstateExpertise.expertise.marketLand.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.realEstateExpertise.expertise.marketLand.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Expertise 2 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.realEstateExpertise.expertise.projectRoadmap.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.realEstateExpertise.expertise.projectRoadmap.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>

                {/* Expertise 3 */}
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#095797]/30"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#095797] rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {t(
                        "servicesConseils.realEstateExpertise.expertise.strategyAlignment.title",
                      )}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        "servicesConseils.realEstateExpertise.expertise.strategyAlignment.description",
                      )}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16 text-gray-800" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
