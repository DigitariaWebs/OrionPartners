require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'editor'], default: 'editor' },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function checkOrCreateUser() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Check for existing users
    const users = await User.find({});
    console.log(`\n📊 Found ${users.length} user(s) in database:`);
    
    users.forEach((user, index) => {
      console.log(`\n  User ${index + 1}:`);
      console.log(`    Email: ${user.email}`);
      console.log(`    Name: ${user.name}`);
      console.log(`    Role: ${user.role}`);
    });

    if (users.length === 0) {
      console.log('\n⚠️  No users found. Creating admin user...');
      
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const adminUser = await User.create({
        name: 'Admin',
        email: 'admin@orionpartners.com',
        password: hashedPassword,
        role: 'admin'
      });

      console.log('\n✅ Admin user created successfully!');
      console.log('   Email: admin@orionpartners.com');
      console.log('   Password: admin123');
      console.log('   Role: admin');
    }

    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkOrCreateUser();
