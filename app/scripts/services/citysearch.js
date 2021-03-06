'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&units=imperial&APPID=86802e2763c24cd36001fa18fc96c30f', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
       }
     });
  });
