/**
 * Blog Migration Script
 * 
 * This script:
 * 1. Reads existing blog posts from data.ts
 * 2. Uploads local images to Cloudinary
 * 3. Saves blog posts to MongoDB with updated image URLs
 * 
 * Usage: node scripts/migrate-blog.js
 */

const mongoose = require('mongoose');
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

// Blog Post Schema
const BlogPostSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  author: { type: String, required: true },
  authorRole: { type: String, required: true },
  authorBio: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  readTime: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true },
}, { timestamps: true });

const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);

// Blog posts data (copied from data.ts)
const blogPosts = [
  {
    id: 1,
    slug: "reforme-fiscale-rdc-2026",
    title: "Réforme Fiscale en RDC 2026 : Ce qui change pour les Entreprises et les Travailleurs",
    excerpt: "La loi n°23/053 du 30 novembre 2023 institue une refonte structurelle du système fiscal en RDC avec l'entrée en vigueur au 1er janvier 2026. Découvrez les trois changements majeurs qui affecteront les entreprises et les travailleurs.",
    author: "Daniel Dekasse, M.A",
    authorRole: "Expert Fiscal",
    authorBio: "Daniel Dekasse est un expert en fiscalité avec une maîtrise en finances publiques, spécialisé dans l'analyse des réformes fiscales et leur impact sur les entreprises en Afrique subsaharienne.",
    publishDate: "2025-01-15",
    readTime: "12 min",
    image: "/ServiceImages/VilleNewYork.jpg",
    category: "Fiscalité",
    content: `
      <p>La promulgation de la loi n°23/053 du 30 novembre 2023 institue une refonte structurelle du système fiscal en République Démocratique du Congo (RDC), dont l'entrée en vigueur est fixée au 1er janvier 2026. Cette législation marque l'abandon du paradigme de l'imposition cédulaire au profit d'un système synthétique, articulé autour de deux instruments principaux : l'Impôt sur les Sociétés (IS) et l'Impôt sur le Revenu des Personnes Physiques (IRPP). L'objectif de la présente analyse est d'examiner les fondements de cette réforme et de disséquer ses trois conséquences macroéconomiques et microéconomiques les plus significatives pour les agents économiques, notamment les entreprises et les investisseurs.</p>

      <h2>Contexte et Rationale de la Réforme Fiscale</h2>
      <p>Pour comprendre la portée de cette réforme, il faut saisir les défis auxquels le système fiscal congolais actuel est confronté :</p>
      
      <ul>
        <li><strong>Une faible pression fiscale</strong> : Avec un ratio impôts/PIB oscillant péniblement entre 6 et 8 %, la RDC se situe bien en deçà de la moyenne de 16 % en Afrique subsaharienne.</li>
        <li><strong>Une forte dépendance au secteur extractif</strong> : L'essentiel des recettes fiscales provient des industries minières et pétrolières.</li>
        <li><strong>Étroitesse de l'assiette fiscale</strong> : La prédominance du secteur informel, estimé à près de 80 % de l'activité économique.</li>
      </ul>

      <h2>Premier changement : L'Impôt sur les Sociétés (IS) à 30 %</h2>
      <p>Le passage d'une multitude d'impôts complexes à un Impôt sur les Sociétés (IS) unique au taux de 30 % est la pierre angulaire de la réforme.</p>

      <h2>Deuxième changement : Le nouvel IRPP</h2>
      <p>L'Impôt sur le Revenu des Personnes Physiques (IRPP) est la deuxième grande révolution de cette réforme fiscale.</p>

      <h2>Conclusion</h2>
      <p>Cette réforme fiscale représente une transformation du paysage fiscal congolais, passant d'une logique cédulaire à une approche synthétique et globale de l'imposition.</p>
    `,
    tags: ["Fiscalité", "RDC", "Réforme", "Entreprises", "IRPP", "Impôts"],
    featured: true,
  },
  {
    id: 2,
    slug: "transformation-digitale-entreprises-2025",
    title: "La transformation digitale des entreprises en 2025",
    excerpt: "Découvrez les tendances clés de la transformation digitale et comment les entreprises peuvent s'adapter aux nouveaux défis technologiques.",
    author: "Marie Dubois",
    authorRole: "Directrice Conseil Digital",
    authorBio: "Marie est une experte en transformation digitale avec plus de 15 ans d'expérience dans l'accompagnement des entreprises dans leur évolution technologique.",
    publishDate: "2025-01-15",
    readTime: "5 min",
    image: "/ServiceImages/VilleNewYork.jpg",
    category: "Transformation Digitale",
    content: `
      <h2>Introduction à la transformation digitale</h2>
      <p>La transformation digitale représente aujourd'hui un défi majeur pour les entreprises de toutes tailles.</p>

      <h2>Les tendances clés de 2025</h2>
      <ul>
        <li><strong>L'intelligence artificielle conversationnelle</strong></li>
        <li><strong>Le cloud computing hybride</strong></li>
        <li><strong>La cybersécurité intégrée</strong></li>
        <li><strong>Les expériences immersives</strong></li>
      </ul>

      <h2>Conclusion</h2>
      <p>La transformation digitale n'est plus une option mais une nécessité.</p>
    `,
    tags: ["Transformation Digitale", "Innovation", "Stratégie"],
    featured: false,
  },
  {
    id: 3,
    slug: "optimisation-comptabilite-automatisation",
    title: "Optimisation de la comptabilité par l'automatisation",
    excerpt: "Comment l'automatisation peut révolutionner vos processus comptables et améliorer l'efficacité de votre entreprise.",
    author: "Pierre Martin",
    authorRole: "Expert Comptable",
    authorBio: "Pierre est expert-comptable certifié avec une spécialisation en systèmes d'information comptable et d'automatisation des processus financiers.",
    publishDate: "2025-01-10",
    readTime: "4 min",
    image: "/ServiceImages/VilleNewYork.jpg",
    category: "Comptabilité",
    content: `
      <h2>Le défi de l'efficacité comptable</h2>
      <p>La comptabilité traditionnelle est souvent perçue comme une fonction administrative chronophage et répétitive.</p>

      <h2>Les avantages de l'automatisation</h2>
      <ul>
        <li><strong>Réduction des erreurs</strong></li>
        <li><strong>Gain de temps</strong></li>
        <li><strong>Amélioration de la compliance</strong></li>
        <li><strong>Meilleure visibilité</strong></li>
      </ul>

      <h2>Conclusion</h2>
      <p>L'automatisation comptable n'est pas une tendance passagère mais une évolution nécessaire.</p>
    `,
    tags: ["Comptabilité", "Automatisation", "Efficacité"],
    featured: false,
  },
  {
    id: 4,
    slug: "intelligence-artificielle-decisionnel",
    title: "L'intelligence artificielle au service du décisionnel",
    excerpt: "Explorez comment l'IA transforme l'analyse de données et aide les dirigeants à prendre des décisions plus éclairées.",
    author: "Sophie Laurent",
    authorRole: "Data Scientist",
    authorBio: "Sophie est data scientist spécialisée dans l'application de l'intelligence artificielle aux problématiques business et de prise de décision.",
    publishDate: "2025-01-05",
    readTime: "6 min",
    image: "/ServiceImages/VilleNewYork.jpg",
    category: "Data Intelligence",
    content: `
      <h2>L'IA : un levier pour la prise de décision</h2>
      <p>L'intelligence artificielle révolutionne le monde du décisionnel.</p>

      <h2>Applications concrètes de l'IA</h2>
      <ul>
        <li><strong>Prévisions de ventes</strong></li>
        <li><strong>Segmentation client</strong></li>
        <li><strong>Détection d'anomalies</strong></li>
        <li><strong>Optimisation des prix</strong></li>
      </ul>

      <h2>Conclusion</h2>
      <p>L'IA ne remplace pas le jugement humain mais l'amplifie.</p>
    `,
    tags: ["Intelligence Artificielle", "Data", "Décisionnel"],
    featured: false,
  },
];

// Upload image to Cloudinary
async function uploadImageToCloudinary(imagePath) {
  // Check if it's a local image path
  if (!imagePath.startsWith('/')) {
    console.log(`  ⏭️  Skipping external URL: ${imagePath}`);
    return imagePath;
  }

  const localPath = path.join(process.cwd(), 'public', imagePath);
  
  // Check if file exists
  if (!fs.existsSync(localPath)) {
    console.log(`  ⚠️  File not found: ${localPath}`);
    return imagePath;
  }

  try {
    console.log(`  📤 Uploading: ${imagePath}`);
    
    const result = await cloudinary.uploader.upload(localPath, {
      folder: 'orionpartners/blog',
      resource_type: 'auto',
    });

    console.log(`  ✅ Uploaded to: ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`  ❌ Failed to upload ${imagePath}:`, error.message);
    return imagePath;
  }
}

// Main migration function
async function migrateBlogPosts() {
  console.log('\n🚀 Blog Migration Script\n');
  console.log('=' .repeat(50));

  // Check environment variables
  if (!process.env.MONGODB_URI) {
    console.error('❌ Error: MONGODB_URI not found in .env');
    process.exit(1);
  }

  const hasCloudinary = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && 
                        process.env.CLOUDINARY_API_KEY && 
                        process.env.CLOUDINARY_API_SECRET;

  if (!hasCloudinary) {
    console.log('⚠️  Warning: Cloudinary not configured. Images will not be uploaded.');
    console.log('   Local image paths will be kept as-is.\n');
  } else {
    console.log('✅ Cloudinary configured\n');
  }

  // Connect to MongoDB
  console.log('📡 Connecting to MongoDB...');
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }

  // Check if posts already exist
  const existingCount = await BlogPost.countDocuments();
  if (existingCount > 0) {
    console.log(`⚠️  Database already has ${existingCount} blog posts.`);
    console.log('   Do you want to continue and add more? (existing posts with same slug will be skipped)\n');
  }

  // Process each blog post
  console.log('📝 Processing blog posts...\n');
  
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const post of blogPosts) {
    console.log(`\n📄 Processing: "${post.title}"`);
    
    // Check if post already exists
    const existingPost = await BlogPost.findOne({ slug: post.slug });
    if (existingPost) {
      console.log(`  ⏭️  Skipped: Post with slug "${post.slug}" already exists`);
      skipCount++;
      continue;
    }

    try {
      // Upload image to Cloudinary if configured
      let imageUrl = post.image;
      if (hasCloudinary) {
        imageUrl = await uploadImageToCloudinary(post.image);
      }

      // Create blog post
      const newPost = await BlogPost.create({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        author: post.author,
        authorRole: post.authorRole,
        authorBio: post.authorBio,
        publishDate: new Date(post.publishDate),
        readTime: post.readTime,
        image: imageUrl,
        category: post.category,
        content: post.content,
        tags: post.tags,
        featured: post.featured,
        published: true,
      });

      console.log(`  ✅ Created: ${newPost._id}`);
      successCount++;
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}`);
      errorCount++;
    }
  }

  // Summary
  console.log('\n' + '=' .repeat(50));
  console.log('\n📊 Migration Summary:\n');
  console.log(`   ✅ Successfully created: ${successCount}`);
  console.log(`   ⏭️  Skipped (existing): ${skipCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  console.log(`   📝 Total processed: ${blogPosts.length}`);

  // Close connection
  await mongoose.connection.close();
  console.log('\n👋 Disconnected from MongoDB');
  console.log('\n🎉 Migration complete!\n');
}

// Run the script
migrateBlogPosts().catch(console.error);


