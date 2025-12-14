import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import { requireAdmin } from '@/lib/auth-helper';
import { sanitizeHtml, sanitizeText } from "@/lib/sanitize";
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";
import {
  blogPostUpdateSchema,
  validateData,
  slugSchema,
} from "@/lib/validation";
import mongoose from "mongoose";

// GET single blog post by ID or slug (public route)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    // Sanitize and validate the ID parameter
    const sanitizedId = id.slice(0, 100);

    let post;

    // Check if id is a valid MongoDB ObjectId
    if (mongoose.Types.ObjectId.isValid(sanitizedId)) {
      post = await BlogPost.findById(sanitizedId).lean();
    }

    // If not found by ID, try finding by slug
    if (!post) {
      post = await BlogPost.findOne({ slug: sanitizedId }).lean();
    }

    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

// PUT - Update blog post (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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
    const { id } = await params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    const body = await request.json();

    // Validate input data
    const validation = validateData(blogPostUpdateSchema, body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const validatedData = validation.data;

    // Check if the post exists
    const existingPost = await BlogPost.findById(id);
    if (!existingPost) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // If slug is being changed, validate and check availability
    if (validatedData.slug && validatedData.slug !== existingPost.slug) {
      const slugValidation = slugSchema.safeParse(validatedData.slug);
      if (!slugValidation.success) {
        return NextResponse.json(
          { error: "Invalid slug format" },
          { status: 400 }
        );
      }

      const slugExists = await BlogPost.findOne({ slug: validatedData.slug });
      if (slugExists) {
        return NextResponse.json(
          { error: "A post with this slug already exists" },
          { status: 409 }
        );
      }
    }

    // Prepare sanitized update data
    const updateData: Record<string, unknown> = {};

    if (validatedData.slug) updateData.slug = validatedData.slug;
    if (validatedData.title)
      updateData.title = sanitizeText(validatedData.title);
    if (validatedData.excerpt)
      updateData.excerpt = sanitizeText(validatedData.excerpt);
    if (validatedData.author)
      updateData.author = sanitizeText(validatedData.author);
    if (validatedData.authorRole)
      updateData.authorRole = sanitizeText(validatedData.authorRole);
    if (validatedData.authorBio)
      updateData.authorBio = sanitizeText(validatedData.authorBio);
    if (validatedData.publishDate)
      updateData.publishDate = validatedData.publishDate;
    if (validatedData.readTime)
      updateData.readTime = sanitizeText(validatedData.readTime);
    if (validatedData.image) updateData.image = validatedData.image;
    if (validatedData.category)
      updateData.category = sanitizeText(validatedData.category);
    if (validatedData.content)
      updateData.content = sanitizeHtml(validatedData.content);
    if (validatedData.tags)
      updateData.tags = validatedData.tags.map((tag) => sanitizeText(tag));
    if (validatedData.featured !== undefined)
      updateData.featured = validatedData.featured;
    if (validatedData.published !== undefined)
      updateData.published = validatedData.published;

    // Update the post
    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      {
        $set: {
          ...updateData,
          updatedAt: new Date(),
        },
      },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      message: "Blog post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog post (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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
    const { id } = await params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    const deletedPost = await BlogPost.findByIdAndDelete(id);

    if (!deletedPost) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Blog post deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}

