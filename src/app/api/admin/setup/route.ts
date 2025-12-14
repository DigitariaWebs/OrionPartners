import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";
import { adminUserSchema, validateData } from "@/lib/validation";

// POST - Create initial admin user (only works if no users exist)
export async function POST(request: NextRequest) {
  // Apply strict rate limiting to prevent brute force attacks
  const clientIp = getClientIp(request);
  const rateLimitResult = checkRateLimit(
    `setup:${clientIp}`,
    RATE_LIMITS.login
  );

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    await connectDB();

    // Check if any users already exist - this endpoint only works for initial setup
    const userCount = await User.countDocuments();
    if (userCount > 0) {
      return NextResponse.json(
        { error: "Initial setup already completed." },
        { status: 400 }
      );
    }

    const body = await request.json();

    // Validate input with strong password requirements
    const validation = validateData(adminUserSchema, body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { name, email, password } = validation.data;

    // Hash password with strong cost factor
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin user
    const adminUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "admin",
    });

    return NextResponse.json(
      {
        message: "Admin user created successfully",
        user: {
          id: adminUser._id,
          name: adminUser.name,
          email: adminUser.email,
          role: adminUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating admin user:", error);
    return NextResponse.json(
      { error: "Failed to create admin user" },
      { status: 500 }
    );
  }
}

