/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

async function checkUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Get raw user documents without schema to see actual data
    const users = await mongoose.connection.db.collection('users').find({}).toArray();
    
    console.log(`Found ${users.length} users:\n`);
    
    users.forEach((user, index) => {
      console.log(`User ${index + 1}:`);
      console.log(`  _id: ${user._id}`);
      console.log(`  email: ${user.email}`);
      console.log(`  name: ${user.name}`);
      console.log(`  role: ${user.role}`);
      console.log(`  password exists: ${!!user.password}`);
      console.log(`  password length: ${user.password ? user.password.length : 0}`);
      console.log(`  password starts with $2: ${user.password ? user.password.startsWith('$2') : false} (bcrypt format)`);
      console.log('');
    });

    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkUsers();
