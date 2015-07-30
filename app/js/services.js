'use strict';

/* Services */

var IPOLDemoServices = angular.module('IPOLDemoServices', ['ngResource']);

IPOLDemoServices.factory('Demo', ['$resource',
  function($resource){
    return $resource('demos/:demoId.json', {}, {
      query: {method:'GET', params:{demoId:'demos'}, isArray:true}
    });
  }]);
