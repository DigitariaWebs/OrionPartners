"use client";

import { useEffect, useState, use } from "react";
import { useSession } from "next-auth/react";
import AdminLayout from "@/components/admin/AdminLayout";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUpload from "@/components/admin/ImageUpload";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface EditPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    author: "",
    authorRole: "",
    authorBio: "",
    readTime: "",
    image: "",
    category: "",
    content: "",
    tags: "",
    featured: false,
    published: true,
    publishDate: "",
  });

  useEffect(() => {
    if (status === "authenticated") {
      fetchPost();
    }
  }, [id, status]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#095797] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/${id}`);
      const data = await response.json();

      if (response.ok && data.post) {
        const post = data.post;
        setFormData({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          author: post.author,
          authorRole: post.authorRole,
          authorBio: post.authorBio,
          readTime: post.readTime,
          image: post.image,
          category: post.category,
          content: post.content,
          tags: post.tags.join(", "),
          featured: post.featured,
          published: post.published,
          publishDate: new Date(post.publishDate).toISOString().slice(0, 16),
        });
      } else {
        alert("Post not found");
        router.push("/admin/posts");
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      alert("Failed to fetch post");
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    let processedValue: string | boolean = type === "checkbox" ? checked : value;

    // Handle datetime-local input
    if (name === "publishDate" && value) {
      try {
        const date = new Date(value);
        processedValue = date.toISOString();
      } catch (error) {
        console.error("Invalid datetime format:", value);
        return; // Don't update state with invalid date
      }
    }

    setFormData({
      ...formData,
      [name]: processedValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate required fields
      const requiredFields = [
        'title', 'slug', 'excerpt', 'author', 'authorRole', 'authorBio',
        'readTime', 'image', 'category', 'content'
      ];

      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

      if (missingFields.length > 0) {
        setError(`Missing required fields: ${missingFields.join(', ')}`);
        setLoading(false);
        return;
      }

      // Validate publishDate format
      let publishDate: string;
      try {
        const date = new Date(formData.publishDate);
        if (isNaN(date.getTime())) {
          throw new Error('Invalid date');
        }
        publishDate = date.toISOString();
      } catch (dateError) {
        setError("Invalid date format. Please check the publish date.");
        setLoading(false);
        return;
      }

      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");

      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          publishDate,
          tags: tagsArray,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/admin/posts");
      } else {
        // Enhanced error handling
        if (data.error) {
          if (data.error.includes('slug')) {
            setError("This slug is already taken. Please choose a different one.");
          } else if (data.error.includes('datetime')) {
            setError("Invalid date format. Please check the publish date.");
          } else if (data.error.includes('validation')) {
            setError(`Validation error: ${data.error}`);
          } else {
            setError(data.error);
          }
        } else {
          setError("Failed to update post. Please try again.");
        }
      }
    } catch (err) {
      console.error("Error updating post:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-[#095797]" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Post</h1>
          <p className="text-gray-600">
            Update the details below to edit this blog post
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title & Slug */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt *
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Read Time *
                  </label>
                  <input
                    type="text"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Author Information */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Author Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Name *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Role *
                </label>
                <input
                  type="text"
                  name="authorRole"
                  value={formData.authorRole}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Bio *
                </label>
                <textarea
                  name="authorBio"
                  value={formData.authorBio}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Featured Image *</h2>
            <ImageUpload
              value={formData.image}
              onChange={(url) => setFormData({ ...formData, image: url })}
              disabled={loading}
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Content *</h2>
            <RichTextEditor
              content={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
            />
          </div>

          {/* Publishing Options */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Publishing Options</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publish Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="publishDate"
                  value={formData.publishDate}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent"
                  required
                />
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#095797] border-gray-300 rounded focus:ring-[#095797]"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Published
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#095797] border-gray-300 rounded focus:ring-[#095797]"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Featured post
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 bg-white rounded-xl shadow-sm border p-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#095797] text-white rounded-lg hover:bg-[#074171] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Updating..." : "Update Post"}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}



