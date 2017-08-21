// this snippet should be in: >ProjectDir/server/config/routes.js
const path = require("path");
var Question = require('../controllers/questions.js');
module.exports = function(app){
    app.get('/getJS', function(req, res){
        Question.getJS(req, res);
    })
    app.get('/getTS', function(req, res){
        console.log("in routes");
        Question.getTS(req, res);
    })
    app.get('/getCSharp', function(req, res){
        console.log("in routes");
        Question.getCSharp(req, res);
    })
    app.get('/getPython', function(req, res){
        console.log("in routes");
        Question.getPython(req, res);
    })
    app.post('/new', function(req, res){
        Question.addNew(req, res);
    })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    })
}
