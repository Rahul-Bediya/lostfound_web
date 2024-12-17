const express = require('express');
const router = express.Router();
const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
  claimItem,           // New import for claim functionality
  getClaimedItems      // New import for fetching claimed items
} = require('../controllers/itemController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// Create a new item
router.post('/post', auth, upload.single('image'), createItem);

// Update an item
router.put('/update/:id', auth, upload.single('image'), updateItem);

// Get all items
router.get('/getall', getItems);

// Get a single item by ID
router.get('/:id', getItemById);

// Delete an item
router.delete('/:id', auth, deleteItem);

// Route to claim an item
router.put('/:id/claim', auth, claimItem); // New route for claiming an item

// Route to get all claimed items
router.get('/claimed', getClaimedItems); // New route for fetching claimed items

module.exports = router;
