var express = require('express');
var jokes = require('../model/jokes.js');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/joke', function(req, res, next) {
    if(!req.session.jokeCount) {
        req.session.jokeCount = 1;
    } else {
        req.session.jokeCount++;
    }
    console.log("Random Jokes visits: " + req.session.jokeCount);
  res.render('jokes', { joke: jokes.getRandomJoke() });
});

router.get('/jokes', function(req, res, next) {
    if(!req.session.jokesCount) {
        req.session.jokesCount = 1;
    } else {
        req.session.jokesCount++;
    }
    console.log("All Jokes visits: " + req.session.jokesCount);
    res.render('alljokes', { jokes: jokes.allJokes });
});

router.get('/addjoke', function(req, res, next){
    if(!req.session.addCount) {
        req.session.addCount = 1;
    } else {
        req.session.addCount++;
    }
    console.log("Added jokes visits: " + req.session.addCount);
    res.render('addjoke');
});

router.post('/storejoke', function(req, res, next) {
    var newJoke = req.body.newJoke;
    if (newJoke) {
        jokes.addJoke(newJoke);
    }
    res.redirect("/addjoke");
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

module.exports = router;
