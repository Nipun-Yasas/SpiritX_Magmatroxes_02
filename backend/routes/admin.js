const { createPlayer, getPlayers, deletePlayer, updatePlayer } = require('../controllers/admin.js');

const {verifyToken} = require('../middleware/auth.js');

const express = require('express');

const router = express.Router();

//CREATE
router.post("/",verifyToken, createPlayer);

//READ
router.get("/",verifyToken, getPlayers);

//UPDATE
router.patch("/:id",verifyToken, updatePlayer);

//DELETE
router.delete("/:id",verifyToken, deletePlayer);

module.exports = router;