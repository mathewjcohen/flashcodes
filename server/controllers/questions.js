// this snippet should be in: >ProjectDir/server/controllers/CONTROLLER_NAME.js
const mongoose = require('mongoose');
const Question = mongoose.model('Question');
mongoose.Promise = global.Promise

module.exports = {
    getJS: function(req, res){
        Question.find({language: 'javascript'}, function (err, jsFlashCodes) {
            if (jsFlashCodes) {
                res.json(jsFlashCodes);
            } else {
                console.log('Error getting all jsFlashCodes in event controller...');
            }
        })
    }
    // addNew: function(req, res){
    //     var question = new FlashCode({
    //         language: req.body.language,
    //         question: req.body.question,
    //         answer: req.body.answer,
    //     })
    //     question.save(function(err){
    //         if(err){
    //             console.log('Error saving during create');
    //         }else{
    //             res.json(question);
    //         }
    //     }).then(data => res.json(data))
    //     .catch(err => console.log(err))
    // }
}
