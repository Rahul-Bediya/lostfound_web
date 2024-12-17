const express = require('express');
const router = express.Router();
const { sendClaimEmail } = require('../controllers/itemController'); // Import email sending function

// Route to send a claim notification email
router.post('/send-claim-email', async (req, res) => {
  const { itemId, userId } = req.body;

  if (!itemId || !userId) {
    return res.status(400).json({ message: 'Item ID and User ID are required.' });
  }

  try {
    // Fetch the item by its ID
    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Fetch the user by ID to get email address
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the claim email
    await sendClaimEmail(item, user.email);

    res.status(200).json({ message: 'Claim email sent successfully!' });
  } catch (error) {
    console.error('Error sending claim email:', error.message);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
});

module.exports = router;
