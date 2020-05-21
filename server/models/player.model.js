const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name must be entered to continue'],
            minLength: [2, 'name must have at least 2 characters']
        },
        position: {
            type: String,
            required: [true, 'position must be entered to continue'],
        }
    },
    {timestamps: true}
);

module.exports.Player = mongoose.model('Player', PlayerSchema);