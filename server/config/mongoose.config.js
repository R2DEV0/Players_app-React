const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playersdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('connectiong to database established'))
    .catch(err => console.log('problem connecting to database', err))