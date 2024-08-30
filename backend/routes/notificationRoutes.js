const express = require('express');
const router = express.Router();
const { getNotifications, createNotification } = require('../controllers/notificationController');

router.get('/:userId', getNotifications);
router.post('/', createNotification);

module.exports = router;
