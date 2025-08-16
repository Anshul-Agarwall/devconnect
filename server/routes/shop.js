// routes/shop.js
const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, (req, res) => {
  res.send('<h1>Welcome to the Shopping Page!</h1>');
});

module.exports = router;
