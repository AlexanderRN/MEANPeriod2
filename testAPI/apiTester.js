var request = require("request");
var options = {
    url: "http://localhost:3000/api/joke",
    method: "POST",
    json : true,
    body : {newJoke : "I'm a joke"}
}
request(options,function(error,res,body){
    console.log(body.joke.newJoke); //Assume the service returns the new Joke
})