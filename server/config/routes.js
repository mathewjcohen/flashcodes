// this snippet should be in: >ProjectDir/server/config/routes.js

var FlashCode = require('../controllers/flashcodes.js');
module.exports = function(app){
    app.get('/', function(req, res){
        FlashCode.index(req, res);
    })
    app.post('/new', function(req, res){
        FlashCode.addNew(req, res);
    })
}
