const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    mobile: {
        type: String,
    },
    password: {
        type: String,
    },
    picture: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);