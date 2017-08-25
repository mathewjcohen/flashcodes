// this snippet should be in: >ProjectDir/server/config/routes.js
const path = require("path");
var Question = require('../controllers/questions.js');
var User = require('../controllers/users.js');
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
    app.post('/deleteFlashCode', function(req, res){
        Question.deleteFlashCode(req, res);
    })
    app.post('/login', function(req, res){
        User.login(req, res);
    })
    app.get('/checkLogin', function(req, res){
        User.checkLogin(req, res);
    })
    app.get('/logout', function(req, res){
        User.logout(req, res);
    })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    })
}
