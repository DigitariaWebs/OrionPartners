import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import { blogPosts } from '@/app/blog/data';
import { requireAdmin } from "@/lib/auth-helper";
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";

// POST - Migrate blog posts from data.ts to MongoDB
export async function POST(request: NextRequest) {
  // Require admin authentication
  const authCheck = await requireAdmin();
  if (!authCheck.authorized) {
    return authCheck.response;
  }

  // Apply rate limiting
  const clientIp = getClientIp(request);
  const rateLimitResult = checkRateLimit(
    `migrate:${clientIp}`,
    RATE_LIMITS.admin
  );

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    await connectDB();

    // Check if posts already exist in database
    const existingCount = await BlogPost.countDocuments();
    if (existingCount > 0) {
      return NextResponse.json(
        {
          error:
            "Database already contains blog posts. Clear the database first if you want to re-migrate.",
          existingCount,
        },
        { status: 400 }
      );
    }

    // Migrate posts
    const migratedPosts = [];

    for (const post of blogPosts) {
      try {
        const newPost = await BlogPost.create({
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          authorRole: post.authorRole,
          authorBio: post.authorBio,
          publishDate: new Date(post.publishDate),
          readTime: post.readTime,
          image: post.image,
          category: post.category,
          content: post.content,
          tags: post.tags,
          featured: post.featured,
          published: true,
        });
        migratedPosts.push(newPost);
      } catch (error) {
        console.error(`Error migrating post "${post.title}":`, error);
      }
    }

    return NextResponse.json(
      {
        message: "Blog posts migrated successfully",
        count: migratedPosts.length,
        posts: migratedPosts.map((p) => ({
          id: p._id,
          title: p.title,
          slug: p.slug,
        })),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during migration:", error);
    return NextResponse.json(
      { error: "Failed to migrate blog posts" },
      { status: 500 }
    );
  }
}

// DELETE - Clear all blog posts (for re-migration)
export async function DELETE(request: NextRequest) {
  // Require admin authentication
  const authCheck = await requireAdmin();
  if (!authCheck.authorized) {
    return authCheck.response;
  }

  // Apply rate limiting
  const clientIp = getClientIp(request);
  const rateLimitResult = checkRateLimit(
    `migrate:${clientIp}`,
    RATE_LIMITS.admin
  );

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    await connectDB();

    const result = await BlogPost.deleteMany({});

    return NextResponse.json({
      message: "All blog posts deleted",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error clearing blog posts:", error);
    return NextResponse.json(
      { error: "Failed to clear blog posts" },
      { status: 500 }
    );
  }
}

