import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { requireAdmin } from "@/lib/auth-helper";
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";
import { validateFile, sanitizeFilename } from "@/lib/validation";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  // Require admin authentication
  const authCheck = await requireAdmin();
  if (!authCheck.authorized) {
    return authCheck.response;
  }

  // Apply rate limiting
  const clientIp = getClientIp(request);
  const rateLimitResult = checkRateLimit(
    `upload:${clientIp}`,
    RATE_LIMITS.upload
  );

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: "Too many upload requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(
            Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
          ),
          "X-RateLimit-Limit": String(rateLimitResult.limit),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    // Validate file
    const fileValidation = validateFile(file);
    if (!fileValidation.valid) {
      return NextResponse.json(
        { error: fileValidation.error },
        { status: 400 }
      );
    }

    // Sanitize filename
    const safeFilename = sanitizeFilename(file.name);

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload to Cloudinary with restrictions
    const result = await cloudinary.uploader.upload(base64, {
      folder: "orionpartners/blog",
      resource_type: "image", // Only allow images
      allowed_formats: ["jpg", "jpeg", "png", "gif", "webp", "svg"],
      max_bytes: 5 * 1024 * 1024, // 5MB max
      public_id: `${Date.now()}_${safeFilename.replace(/\.[^/.]+$/, "")}`, // Remove extension, Cloudinary adds it
    });

    return NextResponse.json({
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}


