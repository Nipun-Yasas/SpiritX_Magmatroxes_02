const express = require('express');
const router = express.Router();
const {getUserTeam, addPlayer, deletePlayer} = require('../controllers/user.js');

//Get user player

router.get("/:id", getUserTeam);
router.post("/:id", addPlayer);
router.delete("/:id", deletePlayer);

module.exports = router;