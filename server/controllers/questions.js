// this snippet should be in: >ProjectDir/server/controllers/CONTROLLER_NAME.js
const mongoose = require('mongoose');
const Question = mongoose.model('Question');
mongoose.Promise = global.Promise

module.exports = {
    getJS: function(req, res){
        Question.find({language: 'JavaScript'}, function (err, jsFlashCodes) {
            if (jsFlashCodes) {
                res.json(jsFlashCodes);
            } else {
                console.log('Error getting all jsFlashCodes in event controller...');
            }
        })
    },
    getTS: function(req, res){
        Question.find({language: 'TypeScript'}, function (err, tsFlashCodes) {
            if (tsFlashCodes) {
                res.json(tsFlashCodes);
            } else {
                console.log('Error getting all tsFlashCodes in event controller...');
            }
        })
    },
    allFlashCodes: function(req, res){
        Question.find({}, function (err, allFlashCodes) {
            if (allFlashCodes) {
                res.json(allFlashCodes);
            } else {
                console.log('Error getting all jsFlashCodes in event controller...');
            }
        })
    },
    deleteFlashCode: function(req, res){
        Question.remove({question: req.body.question}, function (err, removed) {
            if (removed) {
                res.json(removed);
            } else {
                console.log('Error getting all jsFlashCodes in event controller...');
            }
        })
    },
    addFlashCode: function(req, res){
        var question = new Question({
            language: req.body.language,
            question: req.body.question,
            answer: req.body.answer,
        })
        question.save(function(err){
            if(err){
                console.log('Error saving during create');
            }else{
                res.json(question);
            }
        })
    }
}
