'use strict';

/* App Module */

var IPOLDemosApp = angular.module('IPOLDemosApp', [
  'ngRoute',
  'IPOLDemoAnimations',
  'IPOLDemoControllers',
  'IPOLDemoFilters',
  'IPOLDemoServices',
  'IPOLFileUpload',
  'IPOLImgCrop'
]);

IPOLDemosApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/demos', {
        templateUrl: 'partials/demos-list.html',
        controller: 'DemoListCtrl'
      }).
      when('/demos/:demoId', {
        templateUrl: 'partials/demo-detail.html',
        controller: 'DemoDetailCtrl'
      }).
      otherwise({
        redirectTo: '/demos'
      });
  }]);

/* should go to the directoves.js file ... */
IPOLDemosApp.directive('floatsaving', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        scope: {
            model: '=ngModel'
        },
        link: function (scope, element, attrs, ngModelCtrl) {
            if (!ngModelCtrl) {
                return;
            }
            ngModelCtrl.$parsers.push(function (value) {
                if (!value || value==='' || isNaN(parseFloat(value)) ) {
                    value=0;
                }
                return parseFloat(value);
            });
        }
    };
});