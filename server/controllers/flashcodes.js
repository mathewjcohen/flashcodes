// this snippet should be in: >ProjectDir/server/controllers/CONTROLLER_NAME.js
const mongoose = require('mongoose');
const FlashCode = mongoose.model('FlashCode');
mongoose.Promise = global.Promise

module.exports = {
    index: function(req, res){
        res.render('index');
    },
    addNew: function(req, res){
        var flashcode = new FlashCode({
            language: req.body.language,
            question: req.body.question,
            answer: req.body.answer,
        })
        flashcode.save(function(err){
            if(err){
                console.log('Error saving during create');
            }else{
                res.json(flashcode);
            }
        }).sort({createdAt: -1})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    }
}
