const { createPlayer, getPlayers, deletePlayer, updatePlayer } = require('../controllers/admin.js');

//const { = require('../middleware/auth.js');

const express = require('express');

const router = express.Router();

//CREATE
router.post("/create", createPlayer);

//READ
router.get("/get", getPlayers);

//UPDATE
router.put("/:id", updatePlayer);

//DELETE
router.delete("/:id", deletePlayer);

module.exports = router;