// this snippet should be in: >ProjectDir/server/controllers/CONTROLLER_NAME.js
const mongoose = require('mongoose');
const User = mongoose.model('User');
const session = require('express-session');

mongoose.Promise = global.Promise

module.exports = {
    login: function(req, res){
        User.findOne({login: req.body.login, pass: req.body.pass}, function(err, user){
            if(user){
                req.session.login = req.body.login;
                status = { loggedIn: true };
                res.json(status);
            }else{
                status = { loggedIn: true };
                res.json(status);
            }
        })
    },
    checkLogin: function(req, res){
        if (req.session.login){
            status = { loggedIn: true };
            res.json(status);
        }else{
            status = { loggedIn: false };
            res.json(status);
        }
    },
    logout: function(req, res){
        req.session.destroy();
        status = { loggedIn: false };
        res.json(status);
    },
}
