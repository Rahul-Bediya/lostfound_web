const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'User not found, authorization denied' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = auth;


// const jwt = require('jsonwebtoken');

// const auth = (req, res, next) => {
//     const token = req.header('Authorization').replace('Bearer ', '');

//     if (!token) {
//         return res.status(401).json({ message: 'No token, authorization denied' });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(401).json({ message: 'Token is not valid' });
//     }
// };

// module.exports = auth;


// const jwt = require('jsonwebtoken');
// const User = require('../models/user');

// const auth = async (req, res, next) => {
//   try {
//     const token = req.header('Authorization');
//     if (!token) {
//       return res.status(401).json({ message: 'No token, authorization denied' });
//     }

//     const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id);

//     if (!user) {
//       throw new Error();
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = auth;


// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const authMiddleware = async (req, res, next) => {
//   const token = req.header('Authorization').replace('Bearer ', '');
//   if (!token) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, 'process.env.JWT_SECRET'); // Replace with your actual JWT secret
//     req.user = await User.findById(decoded.id).select('-password'); // Exclude the password from the user object
//     if (!req.user) {
//       throw new Error('User not found');
//     }
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };

// module.exports = authMiddleware;
