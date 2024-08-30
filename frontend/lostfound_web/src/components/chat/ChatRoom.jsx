// frontend/src/components/ChatRoom.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

// const socket = io('http://localhost:3000');
// import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
    autoConnect: false, // Disable automatic connection
  }); // Replace with your server URL

socket.on('connect', () => {
  console.log('Connected to Socket.IO server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from Socket.IO server');
});

const ChatRoom = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/chat/messages/${chatId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    if (user) {
      socket.emit('joinRoom', chatId);
      socket.on('receiveMessage', (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
      });
    }

    return () => {
      socket.off('receiveMessage');
    };
  }, [chatId, user]);

  const handleSendMessage = async () => {
    if (newMessage.trim() && user) {
      const message = {
        chatId,
        sender: user._id,
        text: newMessage
      };

      socket.emit('sendMessage', message);
      setMessages(prevMessages => [...prevMessages, { ...message, sender: { _id: user._id, name: user.name } }]);
      setNewMessage('');

      try {
        await axios.post('http://localhost:3000/api/chat/messages', {
          chatId,
          text: newMessage
        });
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  if (!user) return <div>Loading user data...</div>;

  return (
    <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Chat</h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="p-4 overflow-y-auto h-64">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.sender._id === user._id ? 'text-right' : 'text-left'}`}>
                <span className="block text-sm font-semibold">{msg.sender.name}</span>
                <span className="block">{msg.text}</span>
                <span className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleTimeString()}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex p-4 border-t border-gray-200">
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
