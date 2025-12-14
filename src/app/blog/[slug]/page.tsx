"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import { sanitizeHtml } from "@/lib/sanitize";

interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorBio: string;
  publishDate: string;
  readTime: string;
  image: string;
  category: string;
  content: string;
  tags: string[];
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/${slug}`);
      const data = await response.json();
      if (response.ok && data.post) {
        setPost(data.post);
      } else {
        notFound();
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      notFound();
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#095797] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement de l&apos;article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
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
                  {new Date(post.publishDate).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
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
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(post.content),
                  }}
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
                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: "var(--color-primary)" }}
                  >
                    À propos de l&apos;auteur
                  </h3>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p
                        className="font-bold text-lg mb-1"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {post.author}
                      </p>
                      <p
                        className="text-sm font-medium mb-2"
                        style={{ color: "var(--color-dark)" }}
                      >
                        {post.authorRole}
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {post.authorBio}
                  </p>
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
                      onClick={() =>
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            shareUrl
                          )}`,
                          "_blank"
                        )
                      }
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      aria-label="Partager sur Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                            shareText
                          )}&url=${encodeURIComponent(shareUrl)}`,
                          "_blank"
                        )
                      }
                      className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
                      aria-label="Partager sur Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                            shareUrl
                          )}`,
                          "_blank"
                        )
                      }
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
