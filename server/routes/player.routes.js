const PlayerController = require('../controllers/player.controller');

module.exports = function(app){
    app.get('/api/players', PlayerController.allPlayers);
    app.get('/api/players/:id', PlayerController.getOne);
    app.post('/api/Players', PlayerController.createPlayer);
    app.put('/api/update/:id', PlayerController.update);
    app.delete('/api/players/:id', PlayerController.remove);
}