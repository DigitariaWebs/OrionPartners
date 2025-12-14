import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "editor" | "viewer";
  failedLoginAttempts: number;
  lockUntil: Date | null;
  lastLogin: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: [100, "Name cannot be more than 100 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: [254, "Email cannot be more than 254 characters"],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false, // Don't include password in queries by default
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "editor", "viewer"],
        message: "Role must be admin, editor, or viewer",
      },
      default: "viewer",
    },
    failedLoginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: {
      type: Date,
      default: null,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
UserSchema.index({ role: 1 });

// Method to check if account is locked
UserSchema.methods.isLocked = function (): boolean {
  return !!(this.lockUntil && this.lockUntil > new Date());
};

// Static method to find user by email (including password for auth)
UserSchema.statics.findByEmailForAuth = function (email: string) {
  return this.findOne({ email }).select("+password");
};

// Prevent model recompilation during development
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;

