var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    self = this;
    $http({
        method : "GET",
        url : "http://localhost:3000/api/jokes"
    }).then(function mySucces(response) {
        self.jokes = response.data;
        console.log(self.jokes)
    }, function myError(response) {
        self.jokes = response.statusText;
    });
    $http({
        method : "GET",
        url : "http://localhost:3000/api/joke/random"
    }).then(function mySucces(response) {
        self.randomJoke = response.data;
        console.log(self.randomJoke)
    }, function myError(response) {
        self.randomJoke = response.statusText;
    });
});