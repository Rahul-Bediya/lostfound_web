

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     // Optional fields to store details of user's posts
//     posts: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Item'
//     }]
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false, // Make it optional (set to true if required)
        trim: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v); // Simple 10-digit phone number validation
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    // Optional fields to store details of user's posts
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
