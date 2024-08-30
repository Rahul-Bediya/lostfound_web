// backend/models/Chat.js
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
