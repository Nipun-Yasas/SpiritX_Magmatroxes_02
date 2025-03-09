const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const router = express.Router();


router.post("/signup", async (req, res) => {
    try {
        const { username, password, isadmin, teamMembers, budget } = req.body;

        // Check if username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already taken" });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with hashed password and provided details
        const newUser = new User({
            username,
            password: hashedPassword,
            isadmin: isadmin || false, // Default to false if not provided
            teamMembers: Array.isArray(teamMembers) ? teamMembers : [], // Ensure it's an array
            budget: budget || 9000000 // Default budget if not provided
        });

        // Save the user to the database
        await newUser.save();

        // Send response
        res.status(201).json({ message: "Signup successful! Redirecting to login..." });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
