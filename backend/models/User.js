const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, minlength: 8 },
    password: { type: String, required: true },
    isadmin: { type: Boolean, required: true },
    teamMembers:{type: mongoose.Schema.Types.ObjectId, ref: "Player"},
    budget:{type:Number,default:9000000}
});


const User = mongoose.model('User', userSchema);
module.exports = User;