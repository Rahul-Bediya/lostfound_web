// backend/controllers/chatController.js
const Chat = require('../models/chat');
const Message = require('../models/message');

const getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;
    const messages = await Message.find({ chatId }).populate('sender', 'name');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
};

const postMessage = async (req, res) => {
  try {
    const { chatId, text } = req.body;
    const userId = req.user._id; // Extracted from authenticated request
    const message = new Message({ chatId, sender: userId, text });
    await message.save();

    // Add the message to the chat's message array
    await Chat.findByIdAndUpdate(chatId, { $push: { messages: message._id } });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Error posting message' });
  }
};

const createChat = async (req, res) => {
  try {
    const { itemId, claimerId } = req.body;
    const userId = req.user._id;

    const chat = new Chat({
      itemId,
      participants: [userId, claimerId],
    });

    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error: 'Error creating chat' });
  }
};

module.exports = {
  getMessages,
  postMessage,
  createChat,
};
