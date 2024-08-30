const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const initializeSocket = require('./socket');
const http = require('http');
// const { Server } = require('socket.io');


const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const chatRoutes = require('./routes/chatRoutes');
// const notificationRoutes = require('./routes/notificationRoutes');
const path = require('path');

// const ChatMessage = require('./models/ChatMessage');
// const uploadRoute = require('./routes/uploadRoutes');

dotenv.config();

const app = express();
const server = http.createServer(app);

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:5174', // Update with your frontend's URL
//     methods: ['GET', 'POST']
//   }
// });




app.use(express.json());
// app.use(cors({ origin: 'http://localhost:5000' }));
app.use(cors());  // Enable CORS for all routes



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

  // Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/chat', chatRoutes);
// app.use('/api/notifications', notificationRoutes);
// app.use('/api/imageupload', uploadRoute);


// Socket.io connection
// io.on('connection', (socket) => {
//   console.log('A user connected:', socket.id);

//   socket.on('joinRoom', (roomId) => {
//     socket.join(roomId);
//     console.log(`User ${socket.id} joined room: ${roomId}`);
//   });

//   socket.on('sendMessage', (message) => {
//     io.to(message.roomId).emit('receiveMessage', message);
//   });

//   socket.on('sendNotification', (notification) => {
//     io.to(notification.userId).emit('receiveNotification', notification);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

initializeSocket(server);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


