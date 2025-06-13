const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * User Schema Definition
 * Defines the structure and validation rules for user documents in MongoDB
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate emails
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Minimum password length requirement
  },
  role: {
    type: String,
    enum: ['admin', 'instructor', 'learner'], // Only these roles are allowed
    default: 'learner' // New users are learners by default
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically set to current date
  }
});

/**
 * Pre-save Middleware
 * Hashes the password before saving to the database
 * Only hashes if the password has been modified
 */
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10); // Generate salt with 10 rounds
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

/**
 * Password Comparison Method
 * Compares a candidate password with the stored hashed password
 * @param {string} candidatePassword - The password to compare
 * @returns {Promise<boolean>} - True if passwords match, false otherwise
 */
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User; 