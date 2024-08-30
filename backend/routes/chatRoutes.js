// backend/routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const { getMessages, postMessage, createChat } = require('../controllers/chatController');
const  authenticateUser  = require('../middleware/auth'); // Assuming you have a middleware to authenticate users

// Create a chat for an item
router.post('/create', authenticateUser, createChat);

// Get messages for a specific chat
router.get('/messages/:chatId', authenticateUser, getMessages);

// Post a new message in a chat
router.post('/messages', authenticateUser, postMessage);

module.exports = router;
