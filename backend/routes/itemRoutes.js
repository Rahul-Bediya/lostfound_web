// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/auth');
// const upload = require('../middleware/upload');
// const { createItem, getItems } = require('../controllers/itemController');

// router.post('/', auth, upload.single('image'), createItem);
// router.get('/', getItems); // Assuming getItems is implemented for fetching items

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const itemController = require('../controllers/itemController');
// const auth = require('../middleware/auth');
// const upload = require('../middleware/upload');

// // Route to get all items
// router.get('/', itemController.getItems);

// // Route to create a new item
// router.post('/', auth, upload.single('image'), itemController.createItem);

// // Route to get a single item by ID
// router.get('/:id', itemController.getItemById);

// // Route to update an item
// router.put('/:id', auth, upload.single('image'), itemController.updateItem);

// // Route to delete an item
// router.delete('/:id', auth, itemController.deleteItem);

// module.exports = router;

const express = require('express');
const router = express.Router();
const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem
} = require('../controllers/itemController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
// const upload = require('../config/multerConfig');

// Create a new item
// router.post('/post', auth, upload.single('image'), createItem);
router.post('/post', auth, upload.single('image'), createItem);
// router.post('/post', auth, createItem);

// Update an item
router.put('/update/:id', auth, upload.single('image'), updateItem);
// router.put('/update/:id', auth, updateItem);


// Get all items
router.get('/getall', getItems);

// Get a single item by ID
router.get('/:id', getItemById);

// Delete an item
router.delete('/:id', auth, deleteItem);

module.exports = router;

