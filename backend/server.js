const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');


// const initializeSocket = require('./socket');

// const { Server } = require('socket.io');



const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');


// const notificationRoutes = require('./routes/notificationRoutes');
const path = require('path');

// const ChatMessage = require('./models/ChatMessage');
// const uploadRoute = require('./routes/uploadRoutes');

dotenv.config();

const app = express();




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
app.use('/api/email', emailRoutes);



// initializeSocket(server);


// Handle incoming connections



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






