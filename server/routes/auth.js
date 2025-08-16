// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  
  if (!user) return res.status(400).json({ msg: 'Invalid username' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid password' });

  const token = jwt.sign({ id: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true }).json({ msg: 'Login successful' });
});

module.exports = router;
