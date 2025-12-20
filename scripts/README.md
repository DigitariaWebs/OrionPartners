# Admin Scripts

This folder contains utility scripts for managing the admin dashboard.

---

## 📋 Available Scripts

### 1. `create-admin.js` - Create Admin User

Creates an admin user for the dashboard.

```bash
node scripts/create-admin.js
```

**What it does:**
1. Connects to MongoDB
2. Prompts for admin details (name, email, password)
3. Creates admin user with hashed password

---

### 2. `migrate-blog.js` - Migrate Blog Posts

Migrates existing blog posts from `data.ts` to MongoDB and uploads images to Cloudinary.

```bash
node scripts/migrate-blog.js
```

**What it does:**
1. Reads blog posts from the script (copied from data.ts)
2. Uploads local images to Cloudinary (if configured)
3. Saves blog posts to MongoDB with updated image URLs
4. Skips posts that already exist (based on slug)

**Requirements:**
- MongoDB URI in `.env`
- Cloudinary credentials in `.env` (optional - will skip image upload if not configured)

---

### 3. `upload-images.js` - Upload Images to Cloudinary

Uploads all images from a folder to Cloudinary.

```bash
# Upload from default folder (public/ServiceImages)
node scripts/upload-images.js

# Upload from specific folder
node scripts/upload-images.js public/NotreEquipe
node scripts/upload-images.js public/Logos
```

**What it does:**
1. Scans the specified folder for images
2. Uploads each image to Cloudinary
3. Shows URL mapping (local path → Cloudinary URL)

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`

**Requirements:**
- Cloudinary credentials in `.env`

---

## 🔧 Environment Variables Required

Make sure these are set in your `.env` file:

```env
# MongoDB (required for all database operations)
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# Cloudinary (required for image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

---

## 📝 Quick Start

### Step 1: Create Admin User
```bash
node scripts/create-admin.js
```

### Step 2: Migrate Blog Posts (with images)
```bash
node scripts/migrate-blog.js
```

### Step 3: (Optional) Upload additional images
```bash
node scripts/upload-images.js public/NotreEquipe
```

---

## ⚠️ Notes

- **Migration is safe**: Running `migrate-blog.js` multiple times won't create duplicate posts
- **Images are uploaded once**: Cloudinary prevents duplicate uploads by default
- **Always backup**: Before running migrations on production, backup your database

---

## 🔍 Troubleshooting

### "Cannot find module 'dotenv'"
```bash
npm install dotenv
```

### "Cannot find module 'cloudinary'"
```bash
npm install cloudinary
```

### "MONGODB_URI not found"
Make sure your `.env` file exists and has the correct MongoDB connection string.

### "Cloudinary not configured"
Add your Cloudinary credentials to `.env`. You can get them from your Cloudinary dashboard.



