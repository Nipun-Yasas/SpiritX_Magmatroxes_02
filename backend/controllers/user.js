const User = require('../models/User.js');
const Player = require("../models/Player.js");

//get players
const getUserTeam = async (req, res) => {
    try{
        const {id} = req.params;
        
        const user = await User.findById(id).populate("teamMembers","name");
        const team = user.teamMembers.length > 0 ? user.teamMembers.map(player=>player.name) : [];
        res.status(200).json({team});
        
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

//add players
const addPlayer = async (req,res)=>{
    try{
        const {id} = req.params;
        const {playerId} = req.body;

        const user = await User.findById(id);
        const player = await Player.findById(playerId);

        if (player.price > user.budget) {
            return res.status(400).json({ message: "Not enough budget to add player" });
        }

        if (user.teamMembers.length >= 11) {
            return res.status(400).json({ message: "Team is full" });
        }

        user.budget -= player.price;
        user.teamMembers.push(playerId);

        await user.save();

        res.status(200).json({ message: "Player added to team", remainingBudget: user.budget });
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

//delete players
const deletePlayer = async (req, res) => {
    
    try{
        const {id} = req.params;
        const {playerId} = req.body;
        const user = await User.findById(id);

        user.teamMembers = user.teamMembers.filter(id => id.toString() !== playerId.toString());
        await user.save();

        res.status(200).json({message: "Player removed from team"});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

module.exports = { addPlayer, getUserTeam, deletePlayer };

