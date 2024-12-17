

// const User = require('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // @desc    Register a new user
// // @route   POST /api/users/register
// // @access  Public
// exports.registerUser = async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         let user = await User.findOne({ email });

//         if (user) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         user = new User({
//             name,
//             email,
//             password
//         });

//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);

//         await user.save();

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };

// // @desc    Login user
// // @route   POST /api/users/login
// // @access  Public
// exports.loginUser = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const payload = {
//             id: user.id,
//         };

//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
//             if (err) throw err;
//             res.json({ token });
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };

// exports.getUser = async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id).select('-password'); // Exclude the password from the returned user details
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.json(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };

// // @desc    Logout user
// // @route   POST /api/users/logout
// // @access  Private
// exports.logoutUser = (req, res) => {
//     res.clearCookie('token'); // If you were using cookies
//     res.json({ message: 'Logged out successfully' });
// };


const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
exports.registerUser = async (req, res) => {
    const { name, email, password, phone } = req.body; // Include phone number in destructuring

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Validate phone number (optional but recommended)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ message: 'Invalid phone number. It should be 10 digits.' });
        }

        // Create a new user instance
        user = new User({
            name,
            email,
            password,
            phone // Save phone number
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user to database
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const payload = {
            id: user.id,
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // Exclude the password from the returned user details
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Logout user
// @route   POST /api/users/logout
// @access  Private
exports.logoutUser = (req, res) => {
    res.clearCookie('token'); // If you were using cookies
    res.json({ message: 'Logged out successfully' });
};
