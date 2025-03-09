const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    university: { type: String, required: true },
    category: { type: String, enum: ["Batsman", "Bowler", "All-Rounder"], required: true },
    price: { type: Number, required: true },
    inningsplayed: { type: Number, default: 0,required: true },
    totalruns: { type: Number, default: 0,required: true },
    wickets: { type: Number, default: 0,required: true },
    ballsfaced: { type: Number, default: 0,required: true },
    overballed: { type: Number, default: 0,required: true },
    runsconceded: { type: Number, default: 0,required: true },
    
});

module.exports = mongoose.model("Player", playerSchema);
