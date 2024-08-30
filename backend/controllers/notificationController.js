const Notification = require('../models/notification');

// Fetch notifications for a user
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.userId });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error });
  }
};

// Create a new notification
const createNotification = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const newNotification = new Notification({
      userId,
      message
    });
    const savedNotification = await newNotification.save();
    res.status(201).json(savedNotification);
  } catch (error) {
    res.status(500).json({ message: 'Error creating notification', error });
  }
};

module.exports = { getNotifications, createNotification };
