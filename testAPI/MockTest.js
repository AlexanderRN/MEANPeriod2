
var expect = require("chai").expect;
var jokes = require("../model/jokes");
var nock = require("nock");
var testJoke = {"id": 34256, "joke": "Shit happens, coding is hard", "reference": "unknown"};

var n = nock('http://localhost:3000');

describe('Jokes API Get', function () {
    before(function (done) {
        n.get('/api/joke/random')
            .reply(200,testJoke );
        done();
    });

    it('should fetch a joke with "Shit happens, coding is hard"', function () {
        jokes.getRandomJoke(function (err, joke) {
            if (err) {
                throw err;
            }
            expect(joke.reference).to.be.equal("unknown");
            expect(joke).to.be.eql(testJoke);
        })
    });
});