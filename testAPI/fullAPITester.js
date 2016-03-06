var expect = require("chai").expect;
var request = require("request");
var expect = require("chai").expect;
var http = require("http");
var app = require('../app');
var server;
var TEST_PORT = 3456;
var jokes = require('../model/jokes.js');

before(function(done){
    var app = require('../app');
    server = http.createServer(app);
    server.listen(TEST_PORT,function(){
        done();
    });
})
after(function(done){
    server.close();
    done();
})

describe("POST: /api/joke", function () {
    var options = {
        url: "http://localhost:" + TEST_PORT + "/api/joke",
        method: "POST",
        json: true,
        body: {joke: "Its better to be late than to arrive ugly"}
    }
    it("should get a Game Object (Player-1)", function (done) {
        request(options, function (error, res, body) {
            var addedJoke = body.joke;
            expect(addedJoke.joke).to.be.equal("Its better to be late than to arrive ugly");
            //You should also check whether the joke actually was added to the Data-store
            done();
        });
    })

    it("should get a random joke", function(done){
        request('http://localhost:'+TEST_PORT+'/api/joke/random', function(error,res,body){
            var randomJoke = JSON.parse(body);
            expect(randomJoke.joke).to.be.a('string'),
                expect(res.statusCode).to.be.equal(200);
            done();
        })
    })

    it("should get a all jokes", function(done){
        request('http://localhost:'+TEST_PORT+'/api/jokes', function(error,res,body){
            var allJokes = JSON.parse(body);
            expect(allJokes.jokes).to.be.an('Array'),
                expect(res.statusCode).to.be.equal(200);
            done();
        })
    })
});

