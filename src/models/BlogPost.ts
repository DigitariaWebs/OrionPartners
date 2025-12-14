import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlogPost extends Document {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorBio: string;
  publishDate: Date;
  readTime: string;
  image: string;
  category: string;
  content: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema: Schema<IBlogPost> = new Schema(
  {
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      maxlength: [500, 'Excerpt cannot exceed 500 characters'],
    },
    author: {
      type: String,
      required: [true, 'Author name is required'],
    },
    authorRole: {
      type: String,
      required: [true, 'Author role is required'],
    },
    authorBio: {
      type: String,
      required: [true, 'Author bio is required'],
    },
    publishDate: {
      type: Date,
      default: Date.now,
    },
    readTime: {
      type: String,
      required: [true, 'Read time is required'],
    },
    image: {
      type: String,
      required: [true, 'Feature image is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    tags: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for better query performance
BlogPostSchema.index({ slug: 1 });
BlogPostSchema.index({ category: 1 });
BlogPostSchema.index({ publishDate: -1 });
BlogPostSchema.index({ featured: 1 });

// Prevent model recompilation during development
const BlogPost: Model<IBlogPost> = 
  mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);

export default BlogPost;


