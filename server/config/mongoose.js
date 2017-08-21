// this snippet should be in: >ProjectDir/server/config/mongoose.js
// This file connects to the database AND loads all of the models in the models path

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/flashcodes', {useMongoClient: true});

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
});
