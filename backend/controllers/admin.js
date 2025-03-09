const Player = require("../models/Player.js");

//create
const createPlayer = async (req, res) => {
    const player = new Player(req.body);

    try{
        const newplayer = await player.save();
        res.status(201).json(newplayer);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}


//get
const getPlayers = async (req, res) => {
    try{
        const players = await Player.find();
        res.status(200).json(players);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}


//delete
const deletePlayer = async (req, res) => {
    try{
        const player = await Player.findByIdAndDelete(req.params.id);
        if(!player) res.status(404).json({message: "Not found"});
        res.status(200).json({message: "Deleted"});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}


//update
const updatePlayer = async (req, res) => {
    try{
        const player = await Player.findByIdAndUpdate(req.params.id);
        if(player){
            player.set(req.body);
            const updatedplayer = await player.save();
            res.status(200).json(updatedplayer);
        }
        else{
            res.status(404).json({message: "Not found"});
        }
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}



module.exports = { createPlayer, getPlayers, deletePlayer, updatePlayer };