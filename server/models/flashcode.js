// this snippet should be in: >ProjectDir/server/models/MODEL_NAME.js
const mongoose = require('mongoose');
var FlashCodeSchema = new mongoose.Schema({
    language: {type: String, required: true},
    question: {type: String, required: true},
    answer: {type: String, required: true}
});
var FlashCode = mongoose.model('FlashCode', FlashCodeSchema);
