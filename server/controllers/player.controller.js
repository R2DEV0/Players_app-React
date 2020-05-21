const { Player } = require('../models/player.model');

module.exports.createPlayer = (req, res) => {
    const { name, position } = req.body;
    Player.create({
        name,
        position
    })
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err));
};

module.exports.allPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.status(400).json(err));
};

module.exports.getOne = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(player => res.json({ player }))
        .catch(err => res.status(400).json(err));
};


module.exports.update = (req, res) => {
    const {id} = req.params;
    const {name, position} = req.body;
    Player.findOneAndUpdate({ _id: id }, {
        name,
        position
    },
    {
        new: true,
        useFindandModify: true,
        runValidators:true
    })
    .then(updatedPlayer => res.json(updatedPlayer))
    .catch(err => res.status(400).json(err));
};


module.exports.remove = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.status(400).json(err));
};