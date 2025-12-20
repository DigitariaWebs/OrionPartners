/**
 * Image Upload Script
 * 
 * This script uploads all images from a folder to Cloudinary
 * 
 * Usage: 
 *   node scripts/upload-images.js                    # Upload all images from public/ServiceImages
 *   node scripts/upload-images.js public/NotreEquipe # Upload all images from specific folder
 */

const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

// Upload a single image
async function uploadImage(filePath, folder) {
  const fileName = path.basename(filePath, path.extname(filePath));
  
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `orionpartners/${folder}`,
      public_id: fileName,
      resource_type: 'auto',
      overwrite: false,
    });

    return {
      success: true,
      localPath: filePath,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    return {
      success: false,
      localPath: filePath,
      error: error.message,
    };
  }
}

// Get all images from a directory
function getImagesFromDirectory(dirPath) {
  const images = [];
  
  if (!fs.existsSync(dirPath)) {
    console.error(`❌ Directory not found: ${dirPath}`);
    return images;
  }

  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        images.push(filePath);
      }
    }
  }

  return images;
}

// Main function
async function main() {
  console.log('\n🖼️  Image Upload Script\n');
  console.log('=' .repeat(50));

  // Check Cloudinary configuration
  if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 
      !process.env.CLOUDINARY_API_KEY || 
      !process.env.CLOUDINARY_API_SECRET) {
    console.error('\n❌ Error: Cloudinary not configured in .env');
    console.log('\nPlease add the following to your .env file:');
    console.log('  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name');
    console.log('  CLOUDINARY_API_KEY=your-api-key');
    console.log('  CLOUDINARY_API_SECRET=your-api-secret\n');
    process.exit(1);
  }

  console.log(`\n☁️  Cloudinary Cloud: ${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}\n`);

  // Get directory from command line or use default
  const targetDir = process.argv[2] || 'public/ServiceImages';
  const fullPath = path.isAbsolute(targetDir) ? targetDir : path.join(process.cwd(), targetDir);
  const folderName = path.basename(targetDir);

  console.log(`📁 Source Directory: ${fullPath}`);
  console.log(`📂 Cloudinary Folder: orionpartners/${folderName}\n`);

  // Get images
  const images = getImagesFromDirectory(fullPath);

  if (images.length === 0) {
    console.log('⚠️  No images found in the directory.');
    process.exit(0);
  }

  console.log(`🖼️  Found ${images.length} image(s) to upload:\n`);

  // Upload images
  const results = [];
  
  for (let i = 0; i < images.length; i++) {
    const imagePath = images[i];
    const fileName = path.basename(imagePath);
    
    console.log(`[${i + 1}/${images.length}] Uploading: ${fileName}...`);
    
    const result = await uploadImage(imagePath, folderName);
    results.push(result);

    if (result.success) {
      console.log(`    ✅ ${result.cloudinaryUrl}`);
    } else {
      console.log(`    ❌ ${result.error}`);
    }
  }

  // Summary
  console.log('\n' + '=' .repeat(50));
  console.log('\n📊 Upload Summary:\n');

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`   ✅ Successful: ${successful.length}`);
  console.log(`   ❌ Failed: ${failed.length}`);
  console.log(`   📝 Total: ${results.length}`);

  // Show URL mapping
  if (successful.length > 0) {
    console.log('\n📋 URL Mapping (for reference):\n');
    console.log('   Local Path → Cloudinary URL\n');
    
    for (const result of successful) {
      const relativePath = path.relative(path.join(process.cwd(), 'public'), result.localPath);
      console.log(`   /${relativePath}`);
      console.log(`   → ${result.cloudinaryUrl}\n`);
    }
  }

  // Show failed uploads
  if (failed.length > 0) {
    console.log('\n⚠️  Failed Uploads:\n');
    for (const result of failed) {
      console.log(`   ${result.localPath}: ${result.error}`);
    }
  }

  console.log('\n🎉 Done!\n');
}

// Run
main().catch(console.error);



