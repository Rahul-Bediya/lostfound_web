// const mongoose = require('mongoose');

// const itemSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   category: {
//     type: String,
//     required: true,
//     enum: ['Lost', 'Found']
//   },
//   location: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: String,
//     enum: ['Active', 'Resolved'],
//     default: 'Active'
//   },
//   // Reference to the user who posted the item
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   // URL of the uploaded image
//   imageUrl: {
//     type: String,
//     required: false,
//   }
  

// });

// const Item = mongoose.model('Item', itemSchema);

// module.exports = Item;


const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Lost', 'Found']
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  // Change status to claimed with default value as false
  claimed: {
    type: Boolean,
    default: false
  },
  // Reference to the user who posted the item
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // URL of the uploaded image
  imageUrl: {
    type: String,
    required: false,
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
