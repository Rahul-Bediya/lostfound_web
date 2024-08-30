// // backend/socket.js
// const socketIo = require('socket.io');

// const initializeSocket = (server) => {
//   const io = socketIo(server, {
//     cors: {
//       origin: 'http://localhost:3000', // Replace with your frontend URL
//       methods: ['GET', 'POST']
//     }
//   });

//   io.on('connection', (socket) => {
//     console.log('New client connected:', socket.id);

//     socket.on('joinRoom', (chatId) => {
//       socket.join(chatId);
//       console.log(`User joined chat room: ${chatId}`);
//     });

//     socket.on('sendMessage', (message) => {
//       io.to(message.chatId).emit('receiveMessage', message);
//       console.log(`Message sent to chat room ${message.chatId}`);
//     });

//     socket.on('disconnect', () => {
//       console.log('Client disconnected:', socket.id);
//     });
//   });
// };

// module.exports = initializeSocket;


// backend/socket.js
const socketIo = require('socket.io');
const { verifyToken } = require('./middleware/auth'); // Assuming you have a JWT verification function

const initializeSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: 'http://localhost:5173', // Replace with your frontend URL
      methods: ['GET', 'POST']
    }
  });

  io.use((socket, next) => {
    if (socket.handshake.auth && socket.handshake.auth.token) {
      verifyToken(socket.handshake.auth.token, (err, decoded) => {
        if (err) return next(new Error('Authentication error'));
        socket.userId = decoded.id;
        next();
      });
    } else {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Join room
    socket.on('joinRoom', (chatId) => {
      socket.join(chatId);
      console.log(`User ${socket.userId} joined chat room: ${chatId}`);
    });

    // Send message
    socket.on('sendMessage', (message) => {
      io.to(message.chatId).emit('receiveMessage', message);

      // Emit notification to the other participants in the chat
      message.participants.forEach(participant => {
        if (participant !== socket.userId) {
          io.to(participant).emit('notification', {
            chatId: message.chatId,
            sender: message.sender,
            text: message.text,
          });
        }
      });
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};

module.exports = initializeSocket;
