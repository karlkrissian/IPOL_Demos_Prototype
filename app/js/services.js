'use strict';

/* Services */

var IPOLDemoServices = angular.module('IPOLDemoServices', ['ngResource']);

IPOLDemoServices.factory('Demo', ['$resource',
  function($resource){
    return $resource('demos/:demoId.json', {}, {
      query: {method:'GET', params:{demoId:'demos'}, isArray:true}
    });
  }]);

IPOLDemoServices.factory('DemoBlobs', ['$resource',
  function($resource){
    return $resource('http://localhost:7777/get_blobs_of_demo_by_name_ws?demo_name=:demoId', {}, {
      query: {method:'JSONP', params:{demoId:'demos'}, isArray:true}
    });
  }]);

