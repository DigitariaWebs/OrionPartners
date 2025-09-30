"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "./data";

export default function BlogPage() {
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

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#095797] via-[#0a5fa3] to-[#095797] text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Notre Blog</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Découvrez nos insights et analyses sur la transformation digitale,
              la comptabilité et l&apos;intelligence des données
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Article à la une
              </h2>
              <div className="w-20 h-1 bg-accent"></div>
            </motion.div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ transformOrigin: "center" }}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-dark/60">
                      {featuredPost.readTime} de lecture
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {featuredPost.title}
                  </h3>

                  <p
                    className="mb-6 leading-relaxed"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p
                        className="font-semibold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {featuredPost.author}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-dark)" }}
                      >
                        {featuredPost.authorRole}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-dark/60">
                      <Calendar className="w-4 h-4" />
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-dark)" }}
                      >
                        {new Date(featuredPost.publishDate).toLocaleDateString(
                          "fr-FR",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium">
                      Lire l&apos;article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other Posts */}
      <section className="py-16">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              Tous les articles
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ transformOrigin: "center" }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent/90 text-white rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="min-h-[3.5rem] mb-3">
                    <h3
                      className="text-xl font-bold line-clamp-2 group-hover:text-accent transition-colors duration-300"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {post.title}
                    </h3>
                  </div>

                  <p
                    className="text-dark/70 mb-4 line-clamp-3 flex-grow"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {post.author}
                      </p>
                      <p
                        className="text-xs truncate"
                        style={{ color: "var(--color-dark)" }}
                      >
                        {post.authorRole}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-dark/60">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-dark)" }}
                      >
                        {new Date(post.publishDate).toLocaleDateString(
                          "fr-FR",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-medium text-sm transition-all duration-300 flex-shrink-0 hover:bg-accent-hover hover:shadow-md transform hover:scale-105"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    >
                      Lire la suite
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
