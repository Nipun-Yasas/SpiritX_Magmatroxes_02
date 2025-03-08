const express = require('express');
const router = express.Router();
const {getUserTeam, addPlayer, deletePlayer} = require('../controllers/user.js');

//Get user player
router.get("/team/:id", getUserTeam);
router.post("/team/:id", addPlayer);
router.delete("/team/:id", deletePlayer);

module.exports = router;