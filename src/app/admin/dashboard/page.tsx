"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import { FileText, Eye, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  featuredPosts: number;
}

export default function AdminDashboard() {
  const { status } = useSession();
  const router = useRouter();
  const { t } = useI18n();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    featuredPosts: 0,
  });
  const [recentPosts, setRecentPosts] = useState<
    {
      _id: string;
      title: string;
      published: boolean;
      featured: boolean;
      publishDate: string;
      category: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      // Fetch stats and recent posts in parallel
      const [statsResponse, postsResponse] = await Promise.all([
        fetch("/api/blog/stats"), // Create a dedicated stats endpoint
        fetch("/api/blog/?limit=5&published=true"), // Only fetch 5 recent posts
      ]);

      const [statsData, postsData] = await Promise.all([
        statsResponse.json(),
        postsResponse.json(),
      ]);

      // Update stats
      if (statsData.stats) {
        setStats(statsData.stats);
      }

      // Update recent posts
      if (postsData.posts) {
        setRecentPosts(postsData.posts);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchDashboardData();
    }
  }, [status]);

  const statCards = [
    {
      title: t("admin.dashboard.stats.totalArticles"),
      value: stats.totalPosts,
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      title: t("admin.dashboard.stats.published"),
      value: stats.publishedPosts,
      icon: Eye,
      color: "bg-green-500",
    },
    {
      title: t("admin.dashboard.stats.drafts"),
      value: stats.draftPosts,
      icon: Clock,
      color: "bg-yellow-500",
    },
    {
      title: t("admin.dashboard.stats.featured"),
      value: stats.featuredPosts,
      icon: TrendingUp,
      color: "bg-purple-500",
    },
    {
      title: t("admin.dashboard.stats.analytics"),
      value:
        process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
        process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "GA_MEASUREMENT_ID"
          ? t("admin.dashboard.stats.active")
          : t("admin.dashboard.stats.notConfigured"),
      icon: TrendingUp,
      color:
        process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
        process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "GA_MEASUREMENT_ID"
          ? "bg-green-500"
          : "bg-red-500",
      isText: true,
    },
  ];

  return (
    <AdminLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t("admin.dashboard.title")}
          </h1>
          <p className="text-gray-600">{t("admin.dashboard.welcome")}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border-0 p-6 transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-[var(--color-primary)]">
                      {loading ? "..." : stat.isText ? stat.value : stat.value}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-xl shadow-md ${
                      stat.color === "bg-blue-500"
                        ? "bg-blue-500 shadow-blue-200"
                        : stat.color === "bg-green-500"
                          ? "bg-green-500 shadow-green-200"
                          : stat.color === "bg-yellow-500"
                            ? "bg-yellow-500 shadow-yellow-200"
                            : stat.color === "bg-red-500"
                              ? "bg-red-500 shadow-red-200"
                              : "bg-purple-500 shadow-purple-200"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Analytics Section */}
        <div className="bg-white rounded-xl shadow-xl border-0 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[var(--color-primary)]">
                  {t("admin.dashboard.analytics.title")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {t("admin.dashboard.analytics.subtitle")}
                </p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">
                    {t("admin.dashboard.analytics.trackingStatus")}
                  </p>
                  <p className="text-sm text-gray-500">
                    {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
                    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !==
                      "GA_MEASUREMENT_ID"
                      ? t("admin.dashboard.analytics.activeConfigured")
                      : t("admin.dashboard.analytics.notConfiguredMissingId")}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
                    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !==
                      "GA_MEASUREMENT_ID"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
                  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !==
                    "GA_MEASUREMENT_ID"
                    ? t("admin.dashboard.analytics.active")
                    : t("admin.dashboard.analytics.inactive")}
                </div>
              </div>
              {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
                process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !==
                  "GA_MEASUREMENT_ID" && (
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("admin.dashboard.analytics.measurementId")}
                      </p>
                      <p className="text-sm text-gray-500 font-mono">
                        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
                      </p>
                    </div>
                    <a
                      href={`https://analytics.google.com/analytics/web/?hl=fr&pli=1#/p${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.replace("G-", "")}/reports/intelligenthome`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {t("admin.dashboard.analytics.viewAnalytics")}
                    </a>
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-xl shadow-xl border-0 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[var(--color-primary)]">
                  {t("admin.dashboard.recentPosts.title")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {t("admin.dashboard.recentPosts.subtitle")}
                </p>
              </div>
              <Link
                href="/admin/posts/new"
                className="px-5 py-2.5 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-all shadow-md font-medium text-sm flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                {t("admin.dashboard.recentPosts.newArticle")}
              </Link>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {loading ? (
              <div className="p-12 text-center text-gray-500">
                <div className="w-10 h-10 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4 opacity-50"></div>
                {t("admin.dashboard.recentPosts.loading")}
              </div>
            ) : recentPosts.length === 0 ? (
              <div className="p-12 text-center text-gray-500 bg-gray-50/30">
                <div className="mb-4 text-gray-300">
                  <FileText className="w-16 h-16 mx-auto" />
                </div>
                <p className="text-lg font-medium text-gray-600">
                  {t("admin.dashboard.recentPosts.noArticles")}
                </p>
                <p className="text-sm mt-2">
                  {t("admin.dashboard.recentPosts.startCreating")}
                </p>
              </div>
            ) : (
              recentPosts.map((post) => (
                <div
                  key={post._id}
                  className="p-6 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0 pr-6">
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                        {post.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 font-medium text-gray-600 text-xs">
                          <FileText className="w-3.5 h-3.5" />
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {new Date(post.publishDate).toLocaleDateString(
                            "fr-FR",
                            { day: "numeric", month: "long", year: "numeric" },
                          )}
                        </span>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                            post.published
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              post.published ? "bg-green-500" : "bg-yellow-500"
                            }`}
                          ></span>
                          {post.published
                            ? t("admin.dashboard.recentPosts.published")
                            : t("admin.dashboard.recentPosts.draft")}
                        </span>
                        {post.featured && (
                          <span className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold flex items-center gap-1.5">
                            <TrendingUp className="w-3 h-3" />
                            {t("admin.dashboard.recentPosts.featured")}
                          </span>
                        )}
                      </div>
                    </div>
                    <Link
                      href={`/admin/posts/${post._id}`}
                      className="px-4 py-2 text-sm font-medium text-[var(--color-primary)] bg-blue-50 hover:bg-blue-100 hover:text-[var(--color-primary-hover)] rounded-lg transition-colors flex items-center gap-2"
                    >
                      {t("admin.dashboard.recentPosts.edit")}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {!loading && recentPosts.length > 0 && (
            <div className="p-4 border-t border-gray-100 bg-gray-50/50 text-center">
              <Link
                href="/admin/posts"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:underline font-medium text-sm inline-flex items-center gap-1"
              >
                {t("admin.dashboard.recentPosts.viewAll")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}



