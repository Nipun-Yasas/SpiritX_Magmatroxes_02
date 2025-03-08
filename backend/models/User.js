const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, minlength: 8 },
    password: { type: String, required: true },
    isadmin: { type: Boolean, required: true },
});


const User = mongoose.model('User', userSchema);
module.exports = User;