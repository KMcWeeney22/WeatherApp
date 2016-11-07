'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.current
 * @description
 * # current
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=86802e2763c24cd36001fa18fc96c30f', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
