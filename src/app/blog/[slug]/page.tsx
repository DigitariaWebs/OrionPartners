"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import { notFound } from "next/navigation";
import { use } from "react";

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: "transformation-digitale-entreprises-2025",
    title: "La transformation digitale des entreprises en 2025",
    excerpt: "Découvrez les tendances clés de la transformation digitale et comment les entreprises peuvent s'adapter aux nouveaux défis technologiques.",
    author: "Marie Dubois",
    authorRole: "Directrice Conseil Digital",
    authorBio: "Marie est une experte en transformation digitale avec plus de 15 ans d'expérience dans l'accompagnement des entreprises dans leur évolution technologique.",
    publishDate: "2025-01-15",
    readTime: "5 min",
    image: "/ServiceImages/EtudesRecherches.png",
    category: "Transformation Digitale",
    content: `
      <h2>Introduction à la transformation digitale</h2>
      <p>La transformation digitale représente aujourd'hui un défi majeur pour les entreprises de toutes tailles. Avec l'avènement des nouvelles technologies et l'évolution rapide des attentes des consommateurs, il est essentiel de s'adapter pour rester compétitif.</p>

      <h2>Les tendances clés de 2025</h2>
      <p>Cette année, plusieurs tendances se distinguent particulièrement :</p>
      <ul>
        <li><strong>L'intelligence artificielle conversationnelle</strong> : Les chatbots et assistants virtuels deviennent omniprésents</li>
        <li><strong>Le cloud computing hybride</strong> : Une approche flexible pour optimiser les ressources</li>
        <li><strong>La cybersécurité intégrée</strong> : La sécurité devient une priorité stratégique</li>
        <li><strong>Les expériences immersives</strong> : Réalité virtuelle et augmentée transforment l'interaction client</li>
      </ul>

      <h2>Stratégies d'adaptation</h2>
      <p>Pour réussir leur transformation, les entreprises doivent adopter une approche structurée :</p>
      <ol>
        <li>Évaluer leur maturité digitale actuelle</li>
        <li>Définir une vision claire et des objectifs mesurables</li>
        <li>Investir dans les compétences et la formation</li>
        <li>Adopter une approche itérative et agile</li>
      </ol>

      <h2>Conclusion</h2>
      <p>La transformation digitale n'est plus une option mais une nécessité. Les entreprises qui sauront anticiper les changements et s'adapter rapidement seront celles qui réussiront dans cet environnement en constante évolution.</p>
    `,
    tags: ["Transformation Digitale", "Innovation", "Stratégie"]
  },
  {
    id: 2,
    slug: "optimisation-comptabilite-automatisation",
    title: "Optimisation de la comptabilité par l'automatisation",
    excerpt: "Comment l'automatisation peut révolutionner vos processus comptables et améliorer l'efficacité de votre entreprise.",
    author: "Pierre Martin",
    authorRole: "Expert Comptable",
    authorBio: "Pierre est expert-comptable certifié avec une spécialisation en systèmes d'information comptable et d'automatisation des processus financiers.",
    publishDate: "2025-01-10",
    readTime: "4 min",
    image: "/ServiceImages/ComptabiliteCertification.png",
    category: "Comptabilité",
    content: `
      <h2>Le défi de l'efficacité comptable</h2>
      <p>La comptabilité traditionnelle est souvent perçue comme une fonction administrative chronophage et répétitive. L'automatisation offre une solution moderne pour optimiser ces processus et libérer du temps pour des tâches à plus haute valeur ajoutée.</p>

      <h2>Les avantages de l'automatisation</h2>
      <p>L'automatisation des tâches comptables apporte plusieurs bénéfices :</p>
      <ul>
        <li><strong>Réduction des erreurs</strong> : Élimination des saisies manuelles</li>
        <li><strong>Gain de temps</strong> : Traitement automatique des opérations répétitives</li>
        <li><strong>Amélioration de la compliance</strong> : Respect automatique des normes</li>
        <li><strong>Meilleure visibilité</strong> : Tableaux de bord en temps réel</li>
      </ul>

      <h2>Outils et technologies</h2>
      <p>Plusieurs solutions s'offrent aux entreprises :</p>
      <ol>
        <li>Logiciels de comptabilité en cloud</li>
        <li>Outils d'extraction automatique des données</li>
        <li>Systèmes de reconnaissance optique des caractères</li>
        <li>Intelligence artificielle pour la validation des écritures</li>
      </ol>

      <h2>Conclusion</h2>
      <p>L'automatisation comptable n'est pas une tendance passagère mais une évolution nécessaire. Elle permet aux équipes comptables de se concentrer sur l'analyse et le conseil stratégique plutôt que sur les tâches opérationnelles.</p>
    `,
    tags: ["Comptabilité", "Automatisation", "Efficacité"]
  },
  {
    id: 3,
    slug: "intelligence-artificielle-decisionnel",
    title: "L'intelligence artificielle au service du décisionnel",
    excerpt: "Explorez comment l'IA transforme l'analyse de données et aide les dirigeants à prendre des décisions plus éclairées.",
    author: "Sophie Laurent",
    authorRole: "Data Scientist",
    authorBio: "Sophie est data scientist spécialisée dans l'application de l'intelligence artificielle aux problématiques business et de prise de décision.",
    publishDate: "2025-01-05",
    readTime: "6 min",
    image: "/ServiceImages/EtudesRecherches.png",
    category: "Data Intelligence",
    content: `
      <h2>L'IA : un levier pour la prise de décision</h2>
      <p>L'intelligence artificielle révolutionne le monde du décisionnel en permettant d'analyser des volumes de données inimaginables et d'identifier des patterns complexes que l'œil humain ne pourrait détecter.</p>

      <h2>Applications concrètes de l'IA</h2>
      <p>L'IA trouve de nombreuses applications dans le domaine du décisionnel :</p>
      <ul>
        <li><strong>Prévisions de ventes</strong> : Anticipation des tendances avec une précision accrue</li>
        <li><strong>Segmentation client</strong> : Identification automatique des groupes de clients</li>
        <li><strong>Détection d'anomalies</strong> : Identification des comportements inhabituels</li>
        <li><strong>Optimisation des prix</strong> : Ajustement dynamique des tarifs</li>
      </ul>

      <h2>Technologies clés</h2>
      <p>Plusieurs technologies de l'IA sont particulièrement pertinentes :</p>
      <ol>
        <li>Machine Learning pour les prédictions</li>
        <li>Traitement du langage naturel pour l'analyse de texte</li>
        <li>Computer Vision pour l'analyse d'images</li>
        <li>Deep Learning pour les analyses complexes</li>
      </ol>

      <h2>Conclusion</h2>
      <p>L'IA ne remplace pas le jugement humain mais l'amplifie. Elle fournit aux décideurs des insights précieux qui leur permettent de prendre des décisions plus informées et plus rapides.</p>
    `,
    tags: ["Intelligence Artificielle", "Data", "Décisionnel"]
  }
];

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Découvrez cet article : ${post.title}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#095797] via-[#0a5fa3] to-[#095797] text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <span>{post.readTime} de lecture</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-10">
          <div className="max-w-5xl mx-auto">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-xl shadow-lg p-8 mb-8"
                >
                  <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>À propos de l&apos;auteur</h3>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg mb-1" style={{ color: 'var(--color-primary)' }}>{post.author}</p>
                      <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-dark)' }}>{post.authorRole}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-dark)' }}>{post.authorBio}</p>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white rounded-xl shadow-lg p-6 mb-6"
                >
                  <h3 className="text-lg font-bold text-dark mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Share */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-lg font-bold text-dark mb-4">Partager</h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      aria-label="Partager sur Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
                      className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
                      aria-label="Partager sur Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                      className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
                      aria-label="Partager sur LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
