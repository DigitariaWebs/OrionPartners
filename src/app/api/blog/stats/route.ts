import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';

// GET blog stats (admin only)
export async function GET(request: NextRequest) { // eslint-disable-line @typescript-eslint/no-unused-vars
  try {
    await connectDB();

    // Use aggregation pipeline for efficient stats calculation
    const stats = await BlogPost.aggregate([
      {
        $group: {
          _id: null,
          totalPosts: { $sum: 1 },
          publishedPosts: {
            $sum: { $cond: [{ $eq: ['$published', true] }, 1, 0] }
          },
          draftPosts: {
            $sum: { $cond: [{ $eq: ['$published', false] }, 1, 0] }
          },
          featuredPosts: {
            $sum: { $cond: [{ $eq: ['$featured', true] }, 1, 0] }
          }
        }
      }
    ]);

    const result = stats[0] || {
      totalPosts: 0,
      publishedPosts: 0,
      draftPosts: 0,
      featuredPosts: 0
    };

    return NextResponse.json({
      stats: {
        totalPosts: result.totalPosts,
        publishedPosts: result.publishedPosts,
        draftPosts: result.draftPosts,
        featuredPosts: result.featuredPosts
      }
    });

  } catch (error) {
    console.error('Error fetching blog stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}