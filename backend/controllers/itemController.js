// const Item = require('../models/item');

// // @desc    Create a new item
// // @route   POST /api/items
// // @access  Private
// exports.createItem = async (req, res) => {
//   const { title, description, category, location } = req.body;
//   const userId = req.user.id;
//   const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

//   try {
//     const newItem = new Item({
//       title,
//       description,
//       category,
//       location,
//       user: userId,
//       imageUrl
//     });

//     const savedItem = await newItem.save();

//     res.status(201).json(savedItem);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// const cloudinary = require('../config/loudinaryConfig');
// const fs = require('fs');
// const Item = require('../models/item');


// const fs = require('fs');
// const cloudinary = require('../config/cloudinaryConfig'); // Ensure correct import path
// const Item = require('../models/item');
const cloudinary = require('../config/cloudinaryConfig')
const fs = require('fs');
const path = require('path');
const Item = require('../models/item');

// exports.createItem = async (req, res) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ message: 'No file uploaded!' });
//       }
  
//       // Upload the file to Cloudinary
//       const result = await cloudinary.uploader.upload(req.file.path, {
//         folder: 'uploads',
//         use_filename: true,
//         unique_filename: false,
//       });
  
//       // Delete the file from local storage after upload
//       fs.unlinkSync(req.file.path);
  
//       // Create a new item with the uploaded image URL
//       const newItem = new Item({
//         title: req.body.title,
//         description: req.body.description,
//         category: req.body.category,
//         location: req.body.location,
//         user: req.body.userId,
//         imageUrl: result.secure_url // Store the Cloudinary URL
//       });
  
//       // Save the new item to the database
//       const savedItem = await newItem.save();
  
//       // Return the saved item in the response
//       res.status(201).json({ message: 'Item posted successfully!', item: savedItem });
//     } catch (err) {
//       console.error('Error uploading to Cloudinary:', err);
//       res.status(500).json({ message: 'Failed to post item', error: err.message });
//     }
//   };

// Function to create a new item
exports.createItem = async (req, res) => {
  try {
    // Check if file is available
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded!' });
    }

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'uploads',
      use_filename: true,
      unique_filename: false,
    });

    // Delete the file from local storage after upload
    fs.unlinkSync(req.file.path);

    // Create a new item with the uploaded image URL
    const newItem = new Item({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      location: req.body.location,
      user: req.body.userId, // Assuming userId is sent in the request body
      imageUrl: result.secure_url, // Store the Cloudinary URL
    });

    // Save the new item to the database
    const savedItem = await newItem.save();

    // Return the saved item in the response
    res.status(201).json({ message: 'Item posted successfully!', item: savedItem });
  } catch (err) {
    console.error('Error uploading to Cloudinary:', err);
    res.status(500).json({ message: 'Failed to post item', error: err.message });
  }
};



// Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('user', 'name email');
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};



// Get a single item by ID
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate('user', 'name');
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Update an item
exports.updateItem = async (req, res) => {
    const { title, description, category, location } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const itemFields = { title, description, category, location, imageUrl };

    try {
        let item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        // Ensure user owns the item
        if (item.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        item = await Item.findByIdAndUpdate(req.params.id, { $set: itemFields }, { new: true });
        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Delete an item
exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        // Ensure user owns the item
        if (item.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        await item.remove();
        res.json({ message: 'Item removed' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
