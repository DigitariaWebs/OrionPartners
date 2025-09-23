"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Target,
  Lightbulb,
  ChevronRight,
  Mail,
} from "lucide-react";

type TeamMember = {
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
  slug: string;
};

export default function NotreEquipePage() {
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
      title: "Avocate",
      subtitle: "Associée, Directrice du pôle Juridique & Fiscal",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      briefDescription:
        "À la tête de notre pôle Juridique et Fiscal, Me. Gisele Kabwende est une avocate chevronnée forte de 13 ans d'expérience en droit des affaires et fiscalité d'entreprise.",
      description:
        "À la tête de notre pôle Juridique et Fiscal, Me. Gisele Kabwende est une avocate chevronnée forte de 13 ans d'expérience en droit des affaires et fiscalité d'entreprise. Elle conseille nos clients sur des enjeux critiques tels que la conformité réglementaire, l'optimisation fiscale et la sécurisation des transactions (fusions-acquisitions, restructurations). Titulaire d'une licence en droit de l'Université de Kinshasa, sa mission est de transformer les contraintes légales en avantages stratégiques pour nos clients.",
      email: "g.kabwende@orionconseil.com",
      expertise:
        "Droit des affaires, Fiscalité d'entreprise, Conformité réglementaire",
      education: "Licence en droit (Université de Kinshasa)",
      experience:
        "13 ans d'expérience en droit des affaires et fiscalité d'entreprise",
      slug: "gisele-kabwende",
    },
    {
      name: "Ferdinand Ntambwe",
      title: "M.A.",
      subtitle: "Associé, Croissance & Marchés",
      image: "/NotreEquipe/FerdinandNtambwe.jpg",
      briefDescription:
        "En tant qu'Associé Croissance & Marchés, Ferdinand Ntambwe est l'architecte des ponts entre les défis de nos clients et les solutions d'Orion Conseil.",
      description:
        "En tant qu'Associé Croissance & Marchés, Ferdinand Ntambwe est l'architecte des ponts entre les défis de nos clients et les solutions d'Orion Conseil. Il identifie les opportunités stratégiques et s'assure que notre expertise évolue constamment pour répondre à leurs ambitions. Véritable partenaire de nos clients clés, il met à profit plus de 5 ans d'expérience pour cultiver des relations de confiance et transformer leurs objectifs en succès partagés. Son leadership en développement d'affaires est la garantie pour nos clients d'avoir un partenaire qui non seulement comprend, mais anticipe leurs besoins futurs. Ferdinand détient une licence en finance de l'Université Ibn Khaldoun (Tunisie) et une maîtrise en finances publiques de l'Université Laval (Canada).",
      email: "f.ntambwe@orionconseil.com",
      expertise:
        "Développement d'affaires, Stratégie de croissance, Relations clients",
      education:
        "Licence en finance (Université Ibn Khaldoun), Maîtrise en finances publiques (Université Laval)",
      experience: "Plus de 5 ans d'expérience en développement d'affaires",
      slug: "ferdinand-ntambwe",
    },
    {
      name: "Jean Claude Gersone",
      title: "",
      subtitle: "Associé, Performance & Opérations",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      briefDescription:
        "Fort de plus de 5 ans d'expérience, Jean Claude Gersone est le garant de la performance et de la bonne gouvernance de nos missions.",
      description:
        "Fort de plus de 5 ans d'expérience, Jean Claude Gersone est le garant de la performance et de la bonne gouvernance de nos missions. Il s'assure que nos ressources et processus sont parfaitement alignés pour garantir le succès de nos clients. Titulaire d'une licence en économie de l'Université Pédagogique National (RDC) et d'une maîtrise en gestion publique de la prestigieuse ENA.",
      email: "j.gersone@orionconseil.com",
      expertise: "Performance opérationnelle, Gouvernance, Gestion publique",
      education:
        "Licence en économie (Université Pédagogique National), Maîtrise en gestion publique (ENA)",
      experience: "Plus de 5 ans d'expérience en performance et opérations",
      slug: "jean-claude-gersone",
    },
    {
      name: "Philippe Emmanuel",
      title: "MBA",
      subtitle: "Consultant Senior en Développement d'Affaires",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      briefDescription:
        "Philippe Emmanuel est un consultant senior qui se consacre à accélérer la croissance de ses clients. Fort de plus de 10 ans d'expérience.",
      description:
        "Philippe Emmanuel est un consultant senior qui se consacre à accélérer la croissance de ses clients. Fort de plus de 10 ans d'expérience, il conçoit et met en œuvre des stratégies de développement d'affaires sur mesure, visant à augmenter les revenus et à conquérir de nouveaux marchés. Son approche pragmatique combine analyse rigoureuse et exécution terrain pour transformer les opportunités en résultats concrets. Il accompagne les entreprises dans la structuration de leur démarche commerciale, l'optimisation de leurs ventes et la création de partenariats stratégiques. Philippe est titulaire d'un MBA de l'Université Laval (Canada), un gage de sa vision stratégique et de sa solide expertise en gestion.",
      email: "philippeae@outlook.com",
      expertise:
        "Développement d'affaires, Stratégie commerciale, Partenariats stratégiques",
      education: "MBA (Université Laval)",
      experience: "Plus de 10 ans d'expérience en développement d'affaires",
      slug: "philippe-emmanuel",
    },
    {
      name: "Nonce Dede",
      title: "LL.M.",
      subtitle: "Consultant Senior, juridique",
      image: "/NotreEquipe/NonceDede.jpg",
      briefDescription:
        "Fort de plus de 4 ans d'expérience, Nonce Dede est Consultant Juridique au sein d'Orion Conseil. Il apporte une expertise de premier plan pour sécuriser les opérations commerciales.",
      description:
        "Fort de plus de 4 ans d'expérience, Nonce Dede est Consultant Juridique au sein d'Orion Conseil. Il apporte une expertise de premier plan pour sécuriser les opérations commerciales et les investissements de nos clients sur les scènes nationale et internationale. Sa pratique se concentre sur le droit international des affaires, le droit des investissements et la gestion des contentieux. Il est particulièrement spécialisé dans la rédaction, l'analyse et la négociation de contrats complexes. Nonce est titulaire d'une Maîtrise en droit international de l'Université de Montréal (Canada) et d'une licence en Droit économique et social de l'Université de Kinshasa.",
      email: "n.dede@orionconseil.com",
      expertise:
        "Droit international des affaires, Droit des investissements, Rédaction contractuelle",
      education:
        "Maîtrise en droit international (Université de Montréal), Licence en Droit économique et social (Université de Kinshasa)",
      experience:
        "Plus de 4 ans d'expérience en droit international des affaires",
      slug: "nonce-dede",
    },
    {
      name: "Elda Nsekey",
      title: "",
      subtitle: "Consultante, Secteur Bancaire",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      briefDescription:
        "Elda Nsekey est la consultante spécialiste du secteur bancaire au sein d'Orion Conseil. Elle accompagne les institutions financières dans la navigation des défis réglementaires.",
      description:
        "Elda Nsekey est la consultante spécialiste du secteur bancaire au sein d'Orion Conseil. Elle accompagne les institutions financières dans la navigation des défis réglementaires, l'optimisation de leurs opérations et la mise en œuvre de leurs stratégies de transformation. Son expertise couvre l'analyse des produits financiers, la gestion des risques et l'amélioration de l'expérience client. Elle se consacre à fournir des solutions pragmatiques qui renforcent la compétitivité et la rentabilité de nos clients dans un marché en constante évolution. Elda est titulaire d'une licence en économie de l'Université de Kinshasa (RDC). Cette formation lui confère une solide compréhension des mécanismes qui régissent le secteur financier, ancrant son expertise pratique dans des fondements analytiques robustes.",
      email: "nsenkeymayel@gmail.com",
      expertise: "Secteur bancaire, Produits financiers, Gestion des risques",
      education: "Licence en économie (Université de Kinshasa)",
      experience:
        "Spécialiste du secteur bancaire et des institutions financières",
      slug: "elda-nsekey",
    },
    {
      name: "Corine Kasongo",
      title: "",
      subtitle: "Consultante, Stratégie Digitale",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      briefDescription:
        "Corine Kasongo est la partenaire des entreprises qui souhaitent réussir leur transformation numérique. En tant que Consultante en Stratégie Digitale.",
      description:
        "Corine Kasongo est la partenaire des entreprises qui souhaitent réussir leur transformation numérique. En tant que Consultante en Stratégie Digitale, elle aide nos clients à accroître leur visibilité, à optimiser leur présence en ligne et à exploiter le potentiel du digital pour stimuler leur croissance. Passionnée par l'innovation, sa pratique se concentre sur l'élaboration de stratégies de marketing digital, l'analyse de données et l'amélioration de l'expérience utilisateur (UX). Corine traduit les opportunités technologiques en avantages compétitifs concrets. Corine est titulaire d'une licence en économie de l'Université de Kinshasa (RDC).",
      email: "kasongocorine@gmail.com",
      expertise:
        "Stratégie digitale, Marketing digital, Transformation numérique",
      education: "Licence en économie (Université de Kinshasa)",
      experience:
        "Spécialiste en transformation numérique et stratégie digitale",
      slug: "corine-kasongo",
    },
    {
      name: "Gracia Matala",
      title: "",
      subtitle: "Consultant Junior, Énergie",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      briefDescription:
        "Gracia Matala apporte au sein d'Orion Conseil une expertise pointue et spécialisée dans le secteur de l'énergie.",
      description:
        "Gracia Matala apporte au sein d'Orion Conseil une expertise pointue et spécialisée dans le secteur de l'énergie. En tant que Consultante Junior, elle soutient l'équipe sur des mandats complexes liés aux industries du gaz et du pétrole. Elle contribue activement à l'analyse des marchés, à la veille réglementaire et à la recherche de données stratégiques pour nos clients du secteur. Sa rigueur et sa connaissance approfondie des enjeux énergétiques sont des atouts précieux pour nos missions. Gracia est titulaire d'une licence en Gaz et Pétrole, une formation qui lui confère une compréhension technique et économique unique de ce domaine stratégique.",
      email: "g.matala@orionconseil.com",
      expertise: "Secteur de l'énergie, Gaz et pétrole, Analyse de marché",
      education: "Licence en Gaz et Pétrole",
      experience: "Spécialiste junior du secteur énergétique",
      slug: "gracia-matala",
    },
    {
      name: "Renedi Mubutshu",
      title: "",
      subtitle: "Consultante Junior, Analyse Économique",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      briefDescription:
        "Renedi Mubutshu est une Consultante Junior qui renforce les capacités d'analyse économique et quantitative d'Orion Conseil.",
      description:
        "Renedi Mubutshu est une Consultante Junior qui renforce les capacités d'analyse économique et quantitative d'Orion Conseil. Elle joue un rôle clé dans le soutien des missions en fournissant des analyses rigoureuses qui éclairent les décisions stratégiques de nos clients. Elle participe activement à la recherche, à la modélisation de données et à la préparation de rapports d'analyse de marché. Son esprit analytique et sa capacité à synthétiser des informations complexes sont essentiels pour évaluer la viabilité des projets et identifier les opportunités de croissance. Renedi est titulaire d'une licence en économie de l'Université de Kinshasa (RDC), ce qui ancre son travail dans des fondements théoriques et pratiques solides.",
      email: "renedimubutshu@gmail.com",
      expertise:
        "Analyse économique, Modélisation de données, Recherche de marché",
      education: "Licence en économie (Université de Kinshasa)",
      experience: "Spécialiste junior en analyse économique et quantitative",
      slug: "renedi-mubutshu",
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
              Orion Conseilcapitalise sur une équipe d’associés et des
              consultants expérimentés, unis pour mener à bien ses missions.
              C’est en unissant nos forces complémentaires que nous offrons le
              plus de valeur à nos clients. Notre rigueur et notre esprit
              d’équipe font de nous une organisation dynamique et avant-gardiste
              qui se distingue
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {teamMembers.map((member, index) => (
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
                      className="object-cover group-hover:scale-105 transition-transform duration-300 grayscale group-hover:grayscale-0"
                      style={{ objectPosition: "center 0%" }}
                    />
                  </div>

                  {/* Contact Icons */}
                  <div className="absolute top-6 right-6">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#9ac322] transition-colors cursor-pointer group/icon"
                    >
                      <Mail className="w-5 h-5 text-black group-hover/icon:text-white" />
                    </a>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="p-4 pb-2 text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#095797]">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm">
                    {member.subtitle}
                  </p>
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
