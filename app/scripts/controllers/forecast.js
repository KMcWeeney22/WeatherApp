'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherAppApp
 */
 angular.module('weatherAppApp')
   .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
     $scope.cityID = $routeParams.cityID;

     $scope.forecastData = forecast.query({
         cityID: $routeParams.cityID
     });

     $scope.forecastIcon = function(weatherPrediction){
       var currentWeather = "sun-icon.png";
      if (weatherPrediction === "Sunny"){
        currentWeather = "sun-icon.png";
      } else if (weatherPrediction === "Rain"){
        currentWeather = "WeatherRain.png";
      } else if (weatherPrediction === "Snow"){
        currentWeather = "snow-icon.png";
      }
       return currentWeather;
    };

   });
