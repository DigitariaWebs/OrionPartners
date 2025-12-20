import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import { requireAdmin } from '@/lib/auth-helper';
import { sanitizeHtml } from "@/lib/sanitize";
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";
import { blogPostSchema, validateData } from "@/lib/validation";

// GET all blog posts (public route)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const published = searchParams.get("published");
    const featured = searchParams.get("featured");
    const category = searchParams.get("category");
    const limit = Math.min(parseInt(searchParams.get("limit") || "100"), 100); // Cap at 100
    const page = Math.max(parseInt(searchParams.get("page") || "1"), 1);

    const query: Record<string, unknown> = {};

    if (published !== null) {
      query.published = published === "true";
    }

    if (featured !== null) {
      query.featured = featured === "true";
    }

    if (category) {
      // Sanitize category input
      query.category = category.slice(0, 50);
    }

    const skip = (page - 1) * limit;

    const [posts, total] = await Promise.all([
      BlogPost.find(query)
        .sort({ publishDate: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      BlogPost.countDocuments(query),
    ]);

    return NextResponse.json({
      posts,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

// POST - Create new blog post (admin only)
export async function POST(request: NextRequest) {
  // Require admin authentication
  const authCheck = await requireAdmin();
  if (!authCheck.authorized) {
    return authCheck.response;
  }

  // Apply rate limiting
  const clientIp = getClientIp(request);
  const rateLimitResult = checkRateLimit(`blog:${clientIp}`, RATE_LIMITS.admin);

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    await connectDB();

    const body = await request.json();

    // Validate input data
    const validation = validateData(blogPostSchema, body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const validatedData = validation.data;

    // Check if slug already exists
    const existingPost = await BlogPost.findOne({ slug: validatedData.slug });
    if (existingPost) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 409 }
      );
    }

    // Sanitize content - only sanitize HTML, preserve special characters in text fields
    const newPost = await BlogPost.create({
      slug: validatedData.slug,
      title: validatedData.title,
      excerpt: validatedData.excerpt,
      author: validatedData.author,
      authorRole: validatedData.authorRole,
      authorBio: validatedData.authorBio,
      publishDate: validatedData.publishDate || new Date(),
      readTime: validatedData.readTime,
      image: validatedData.image,
      category: validatedData.category,
      content: sanitizeHtml(validatedData.content), // Only sanitize HTML content for XSS prevention
      tags: validatedData.tags || [],
      featured: validatedData.featured || false,
      published:
        validatedData.published !== undefined ? validatedData.published : true,
    });

    return NextResponse.json(
      { message: "Blog post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}


