const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/auth/register – реєстрація користувача
router.post('/register', authController.register);

// POST /api/auth/login – логін користувача
router.post('/login', authController.login);

module.exports = router;
