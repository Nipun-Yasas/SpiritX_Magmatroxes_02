const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ["Batsman", "Bowler", "All-Rounder"], required: true },
    university: { type: String, required: true },
    totalruns: { type: Number, default: 0 },
    wickets: { type: Number, default: 0 },
    inningsplayed: { type: Number, default: 0 },
    ballsfaced: { type: Number, default: 0 },
    overballed: { type: Number, default: 0 },
    runsconceded: { type: Number, default: 0 },
    
});

module.exports = mongoose.model("Player", playerSchema);
