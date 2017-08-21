// this snippet should be in: >ProjectDir/server/config/routes.js
const path = require("path");
var Question = require('../controllers/questions.js');
module.exports = function(app){
    app.get('/getJS', function(req, res){
        Question.getJS(req, res);
    })
    app.get('/getTS', function(req, res){
        Question.getTS(req, res);
    })
    app.get('/getCSharp', function(req, res){
        Question.getCSharp(req, res);
    })
    app.get('/getPython', function(req, res){
        Question.getPython(req, res);
    })
    app.get('/allFlashCodes', function(req, res){
        Question.allFlashCodes(req, res);
    })
    app.post('/addFlashCode', function(req, res){
        Question.addFlashCode(req, res);
    })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    })
}
