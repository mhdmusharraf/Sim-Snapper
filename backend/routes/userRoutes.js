const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const User = require('../models/User');

const router = express.Router();
const upload = multer({ storage });

// User registration endpoint
router.post('/register', upload.single('image'), async (req, res) => {
  try {
    const { name, dob, passportNumber } = req.body;

    // Cloudinary image URL
    const imageUrl = req.file.path;

    // Save to MongoDB
    const user = new User({
      name,
      dob,
      passportNumber,
      imageUrl,
    });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// routes/userRoutes.js

router.put('/update/:id', async (req, res) => {
    try {
      const { mobile, nic } = req.body;
  
      // Find the user by ID and update the mobile and NIC fields
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { mobile, nic },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error during update:', error.message);
      res.status(500).json({ error: 'Failed to update user' });
    }
  });
  

module.exports = router;
