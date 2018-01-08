var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function($rootScope, $scope, $http){
    $scope.title = 'Works';

    $scope.destinations = [];

    $scope.apiKey = 'c118f87d2e6d20693542699da12080c3';

    $scope.newDestination = {
        city: undefined,
        country: undefined
    };

    $scope.addDestination = function() {
        $scope.destinations.push({
            city: $scope.newDestination.city,
            country: $scope.newDestination.country
        });
    };

    $scope.getWeather = function(destination) {
        $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + destination.city + "&appid=" + $scope.apiKey)
            .then(function(response){
                if(response.data.weather) {
                    destination.weather = {};
                    destination.weather.main = response.data.weather[0].main;
                    destination.weather.temp = $scope.convert(response.data.main.temp);
                }
            }, function(err){
                console.log(err);
            })
    };

    $scope.convert = function(temp) {
        return Math.round(temp - 273);
    };

});