
// const cloudinary = require('../config/cloudinaryConfig')
// const fs = require('fs');
// const path = require('path');
// const Item = require('../models/item');
// const nodemailer = require('nodemailer'); // Email functionality


// // Nodemailer configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // Use your email service provider
//     auth: {
//       user: process.env.EMAIL_USER, // Your email address
//       pass: process.env.EMAIL_PASS, // Your email password or app password
//     },
//   });

// exports.createItem = async (req, res) => {
//   try {
//     // Check if file is available
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded!' });
//     }

//     // Upload the file to Cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: 'uploads',
//       use_filename: true,
//       unique_filename: false,
//     });

//     // Delete the file from local storage after upload
//     fs.unlinkSync(req.file.path);

//     // Create a new item with the uploaded image URL
//     const newItem = new Item({
//       title: req.body.title,
//       description: req.body.description,
//       category: req.body.category,
//       location: req.body.location,
//       user: req.body.userId, // Assuming userId is sent in the request body
//       imageUrl: result.secure_url, // Store the Cloudinary URL
//     });

//     // Save the new item to the database
//     const savedItem = await newItem.save();


//       // Fetch all users' email addresses
//       const users = await User.find({}, 'email'); // Fetch only the email field
//       const emailAddresses = users.map((user) => user.email);
  
//       // Prepare email content
//       const emailSubject = 'New Lost & Found Item Posted!';
//       const emailBody = `
//         <h1>New Item Alert</h1>
//         <p><strong>Title:</strong> ${savedItem.title}</p>
//         <p><strong>Description:</strong> ${savedItem.description}</p>
//         <p><strong>Location:</strong> ${savedItem.location}</p>
//         <p><strong>Category:</strong> ${savedItem.category}</p>
//         <p>Click <a href="http://your-website-url.com/items/${savedItem._id}">here</a> to view the item.</p>
//       `;
  
//       // Send email to all users
//       await Promise.all(
//         emailAddresses.map(async (email) => {
//           try {
//             await transporter.sendMail({
//               from: `"Lost & Found" <${process.env.EMAIL_USER}>`,
//               to: email,
//               subject: emailSubject,
//               html: emailBody,
//             });
//             console.log(`Email sent to ${email}`);
//           } catch (err) {
//             console.error(`Failed to send email to ${email}:`, err.message);
//           }
//         })
//       );

//     // Return the saved item in the response
//     res.status(201).json({ message: 'Item posted successfully!', item: savedItem });
//   } catch (err) {
//     console.error('Error uploading to Cloudinary:', err);
//     res.status(500).json({ message: 'Failed to post item', error: err.message });
//   }
// };


// // 2. Controller to mark an item as claimed
// exports.claimItem = async (req, res) => {
//   try {
//     // Find the item by its ID
//     const item = await Item.findById(req.params.id);

//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     // Check if the item is already claimed
//     if (item.claimed) {
//       return res.status(400).json({ message: 'Item already claimed' });
//     }

//     // Update the claimed status of the item
//     item.claimed = true;

//     // Save the updated item
//     await item.save();

//     res.json({ message: 'Item marked as claimed', item });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };

// // 3. Controller to get all claimed items
// exports.getClaimedItems = async (req, res) => {
//   try {
//     // Find all items with claimed status set to true
//     const claimedItems = await Item.find({ claimed: true }).populate('user', 'name email');

//     if (claimedItems.length === 0) {
//       return res.status(404).json({ message: 'No claimed items found' });
//     }

//     res.json(claimedItems);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };



// // Get all items
// exports.getItems = async (req, res) => {
//     try {
//         const items = await Item.find().populate('user', 'name email');
//         res.json(items);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// };



// // Get a single item by ID
// exports.getItemById = async (req, res) => {
//     try {
//         const item = await Item.findById(req.params.id).populate('user', 'name');
//         if (!item) {
//             return res.status(404).json({ message: 'Item not found' });
//         }
//         res.json(item);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// };

// // Update an item
// exports.updateItem = async (req, res) => {
//     const { title, description, category, location } = req.body;
//     const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

//     const itemFields = { title, description, category, location, imageUrl };

//     try {
//         let item = await Item.findById(req.params.id);
//         if (!item) {
//             return res.status(404).json({ message: 'Item not found' });
//         }

//         // Ensure user owns the item
//         if (item.user.toString() !== req.user.id) {
//             return res.status(401).json({ message: 'User not authorized' });
//         }

//         item = await Item.findByIdAndUpdate(req.params.id, { $set: itemFields }, { new: true });
//         res.json(item);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// };

// // Delete an item
// exports.deleteItem = async (req, res) => {
//     try {
//         const item = await Item.findById(req.params.id);
//         if (!item) {
//             return res.status(404).json({ message: 'Item not found' });
//         }

//         // Ensure user owns the item
//         if (item.user.toString() !== req.user.id) {
//             return res.status(401).json({ message: 'User not authorized' });
//         }

//         await item.remove();
//         res.json({ message: 'Item removed' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// };



// const cloudinary = require('../config/cloudinaryConfig');
// const fs = require('fs');
// const path = require('path');
// const Item = require('../models/item');
// const User = require('../models/user'); // Assuming you have a User model to fetch emails
// const nodemailer = require('nodemailer'); // Email functionality

// // Nodemailer configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use your email service provider
//   auth: {
//     user: process.env.EMAIL_USER, // Your email address
//     pass: process.env.EMAIL_PASS, // Your email password or app password
//   },
// });

// // Send email to the user who posted the item
// const sendClaimEmail = async (item, userEmail) => {
//   try {
//     const emailSubject = 'Your Item Has Been Claimed!';
//     const emailBody = `
//       <h1>Claim Notification</h1>
//       <p>The item you posted titled <strong>${item.title}</strong> has been claimed by a user.</p>
//       <p><strong>Description:</strong> ${item.description}</p>
//       <p><strong>Location:</strong> ${item.location}</p>
//       <p><strong>Category:</strong> ${item.category}</p>
//     `;

//     // Send email to the user who posted the item
//     await transporter.sendMail({
//       from: `"Lost & Found" <${process.env.EMAIL_USER}>`, // Sender's email
//       to: userEmail, // Recipient's email (the user who posted the item)
//       subject: emailSubject,
//       html: emailBody,
//     });
//     console.log(`Email sent to ${userEmail}`);
//   } catch (error) {
//     console.error('Error sending email:', error.message);
//   }
// };

// // Controller to create an item
// exports.createItem = async (req, res) => {
//   try {
//     // Check if file is available
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded!' });
//     }

//     // Upload the file to Cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: 'uploads',
//       use_filename: true,
//       unique_filename: false,
//     });

//     // Delete the file from local storage after upload
//     fs.unlinkSync(req.file.path);

//     // Create a new item with the uploaded image URL
//     const newItem = new Item({
//       title: req.body.title,
//       description: req.body.description,
//       category: req.body.category,
//       location: req.body.location,
//       user: req.body.userId, // Assuming userId is sent in the request body
//       imageUrl: result.secure_url, // Store the Cloudinary URL
//     });

//     // Save the new item to the database
//     const savedItem = await newItem.save();

//     // Fetch the email of the user who posted the item
//     const user = await User.findById(req.body.userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Send a notification email to the user who posted the item
//     await sendClaimEmail(savedItem, user.email);

//     res.status(201).json({ message: 'Item posted successfully!', item: savedItem });
//   } catch (err) {
//     console.error('Error uploading to Cloudinary:', err);
//     res.status(500).json({ message: 'Failed to post item', error: err.message });
//   }
// };

// // Controller to claim an item
// exports.claimItem = async (req, res) => {
//   try {
//     // Find the item by its ID
//     const item = await Item.findById(req.params.id).populate('user', 'email'); // Populate user email

//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     // Check if the item is already claimed
//     if (item.claimed) {
//       return res.status(400).json({ message: 'Item already claimed' });
//     }

//     // Update the claimed status of the item
//     item.claimed = true;

//     // Save the updated item
//     await item.save();

//     // Send an email to the user who posted the item
//     await sendClaimEmail(item, item.user.email); // Send email to the user who posted the item

//     res.json({ message: 'Item marked as claimed and email sent', item });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };

// // Controller to get all claimed items
// exports.getClaimedItems = async (req, res) => {
//   try {
//     // Find all items with claimed status set to true
//     const claimedItems = await Item.find({ claimed: true }).populate('user', 'name email');

//     if (claimedItems.length === 0) {
//       return res.status(404).json({ message: 'No claimed items found' });
//     }

//     res.json(claimedItems);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };

// // Get all items
// exports.getItems = async (req, res) => {
//   try {
//     const items = await Item.find().populate('user', 'name email');
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };

// // Get a single item by ID
// exports.getItemById = async (req, res) => {
//   try {
//     const item = await Item.findById(req.params.id).populate('user', 'name');
//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     res.json(item);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };

// // Update an item
// exports.updateItem = async (req, res) => {
//   const { title, description, category, location } = req.body;
//   const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

//   const itemFields = { title, description, category, location, imageUrl };

//   try {
//     let item = await Item.findById(req.params.id);
//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     // Ensure user owns the item
//     if (item.user.toString() !== req.user.id) {
//       return res.status(401).json({ message: 'User not authorized' });
//     }

//     item = await Item.findByIdAndUpdate(req.params.id, { $set: itemFields }, { new: true });
//     res.json(item);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };

// // Delete an item
// exports.deleteItem = async (req, res) => {
//   try {
//     const item = await Item.findById(req.params.id);
//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     // Ensure user owns the item
//     if (item.user.toString() !== req.user.id) {
//       return res.status(401).json({ message: 'User not authorized' });
//     }

//     await item.remove();
//     res.json({ message: 'Item removed' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };



const Item = require('../models/item');
const User = require('../models/user');
const cloudinary = require('../config/cloudinaryConfig');
const fs = require('fs');
const sendEmailNotification = require('../utils/emailUtils');
const sendSMSNotification = require('../utils/smsUtils');

// Send email to the user who posted the item
const sendClaimEmail = async (item, userEmail) => {
  try {
    const emailSubject = 'Your Item Has Been Claimed!';
    const emailBody = `
      <h1>Claim Notification</h1>
      <p>The item you posted titled <strong>${item.title}</strong> has been claimed by a user.</p>
      <p><strong>Description:</strong> ${item.description}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Category:</strong> ${item.category}</p>
    `;

    await sendEmailNotification(userEmail, emailSubject, emailBody);
    console.log(`Email sent to ${userEmail}`);
  } catch (error) {
    console.error('Error sending claim email:', error.message);
  }
};

// Controller to create a new item
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

    // Fetch the email of the user who posted the item
    const user = await User.findById(req.body.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send a notification email to the user who posted the item
    await sendClaimEmail(savedItem, user.email);

    // Get all users and send email and SMS notifications about the new item
    const users = await User.find();
    users.forEach(user => {
      if (user.email) sendEmailNotification(user.email, newItem);
      if (user.phoneNumber) sendSMSNotification(user.phoneNumber, newItem);
    });

    res.status(201).json({ message: 'Item posted successfully!', item: savedItem });
  } catch (err) {
    console.error('Error uploading to Cloudinary:', err);
    res.status(500).json({ message: 'Failed to post item', error: err.message });
  }
};

// Controller to claim an item
exports.claimItem = async (req, res) => {
  try {
    // Find the item by its ID
    const item = await Item.findById(req.params.id).populate('user', 'email'); // Populate user email

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Check if the item is already claimed
    if (item.claimed) {
      return res.status(400).json({ message: 'Item already claimed' });
    }

    // Update the claimed status of the item
    item.claimed = true;

    // Save the updated item
    await item.save();

    // Send an email to the user who posted the item
    await sendClaimEmail(item, item.user.email); // Send email to the user who posted the item

    res.json({ message: 'Item marked as claimed and email sent', item });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Controller to get all claimed items
exports.getClaimedItems = async (req, res) => {
  try {
    // Find all items with claimed status set to true
    const claimedItems = await Item.find({ claimed: true }).populate('user', 'name email');

    if (claimedItems.length === 0) {
      return res.status(404).json({ message: 'No claimed items found' });
    }

    res.json(claimedItems);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
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
