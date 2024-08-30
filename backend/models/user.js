// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     // verified: {
//     //     type: Boolean,
//     //     default: false,
//     // },
//     verificationToken: String,
//     posts: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Item',
//     }],
//     notifications: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Notification',
//     }],
// }, {
//     timestamps: true,
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
    // Optional fields to store details of user's posts
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
