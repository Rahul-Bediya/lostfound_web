// const User = require('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');


// const sendEmail = async (email, subject, message) => {
//     const transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         service: 'Gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD,
//         },
//     });

//     await transporter.sendMail({
//         from: process.env.EMAIL,
//         to: email,
//         subject,
//         text:"welcome to lost found website",
//     });
// };

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
//             password,
//             verificationToken: jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' }),
//         });

//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);

//         await user.save();

//         // Send verification email
//         const verificationLink = `http://localhost:5000/api/users/verify/${user.verificationToken}`;
//         await sendEmail(email, 'Verify Your Email', `Please click this link to verify your email: ${verificationLink}`);

//         res.status(201).json({ message: 'User registered successfully. Please verify your email.' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };

// // @desc    Verify user email
// // @route   GET /api/users/verify/:token
// // @access  Public
// exports.verifyUser = async (req, res) => {
//     try {
//         const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
//         const user = await User.findOne({ email: decoded.email, verificationToken: req.params.token });

//         if (!user) {
//             return res.status(400).json({ message: 'Invalid token or user already verified' });
//         }

//         user.verified = true;
//         user.verificationToken = null;
//         await user.save();

//         res.json({ message: 'User verified successfully' });
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

//         if (!user || !user.verified) {
//             return res.status(400).json({ message: 'Invalid credentials or email not verified' });
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

// // @desc    Logout user
// // @route   POST /api/users/logout
// // @access  Private
// exports.logoutUser = (req, res) => {
//     // This method does not require much in JWT stateless context
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
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

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
