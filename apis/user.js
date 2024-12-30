
const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

// Routes
router.get('/', authMiddleware, getUsers);
router.post('/', authMiddleware, createUser);

module.exports = router;

// File: controllers/
