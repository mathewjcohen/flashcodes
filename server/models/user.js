// this snippet should be in: >ProjectDir/server/models/MODEL_NAME.js
const mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    login: {type: String, required: true},
    pass: {type: String, required: true}
});
var User = mongoose.model('User', UserSchema);