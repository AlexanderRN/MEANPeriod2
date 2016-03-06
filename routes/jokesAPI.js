var express = require('express');
var jokes = require('../model/jokes.js');
var router = express.Router();

router.get("/joke/random",function(req,res, next){
    res.end(JSON.stringify(jokes.getRandomJoke()));
});

router.get("/jokes",function(req,res, next){
    res.end(JSON.stringify(jokes.allJokes));
});

router.post("/joke",function(req,res, next){
    var joke = req.body;
    console.log(JSON.stringify(joke));
    jokes.addJoke(joke.newJoke);
    res.json({joke: joke})
});

module.exports = router;