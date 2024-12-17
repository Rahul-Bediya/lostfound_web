// const express = require('express');
// const router = express.Router();
// const { registerUser, verifyUser, loginUser, logoutUser } = require('../controllers/usercontroller');
// const auth = require('../middleware/auth');

// router.post('/register', registerUser);
// router.get('/verify/:token', verifyUser);
// router.post('/login', loginUser);
// router.post('/logout', auth, logoutUser);

// module.exports = router;
const express = require('express');
const { registerUser, loginUser, logoutUser, getUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', auth, logoutUser);
router.get('/me', auth, getUser); // New route to get user details

module.exports = router;
