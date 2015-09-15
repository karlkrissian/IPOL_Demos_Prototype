'use strict';

/* Controllers */

var IPOLDemoControllers = angular.module('IPOLDemoControllers', []);

IPOLDemoControllers.controller('DemoListCtrl', ['$scope', 'Demo',
  function($scope, Demo) {
    $scope.demos = Demo.query();
    $scope.orderProp = 'title';
  }]);

IPOLDemoControllers.controller('DemoDetailCtrl', 
                              ['$scope', '$routeParams', 'Demo', 'DemoBlobs',
    function($scope, $routeParams, Demo, DemoBlobs
    ) {
      $scope.demo = Demo.get(
         {
            demoId: $routeParams.demoId }, 
            function(demo) {
              $scope.mainImageUrl = "";
            }
         );

       $scope.demoblobs = DemoBlobs.get(
          {
             demoId: $routeParams.demoId }
          );
      
      $scope.uploaded_images = [];
      
      $scope.setImage = function(imageUrl) {
          $scope.mainImageUrl = imageUrl;
      };
          
          
      $scope.ImagePickerCtrl =   function($scope) {
          $scope.selectImage = function (image) {
          if($scope.selected_image === image) {
              $scope.selected_image = '';
          }
          else {
              $scope.selected_image = image;
          }
          
          
          if (typeof $scope.selected_image === "object") {
              $scope.selected_image_link = 'http://localhost:7777/blob_directory/'+ 
                $scope.selected_image.hash + $scope.selected_image.extension;
          } else {
            if ($scope.selected_image.indexOf('.png') > -1) {
              $scope.selected_image_link = 'img/demos/' + $scope.demo.id + 
                                              '/uploaded/' +
                                              $scope.selected_image;
            } else {
              $scope.selected_image_link = 'img/demos/' + $scope.demo.id + '/' + 
                                              $scope.selected_image+'.png';
            }
          }
        }
      }

  }
  ]
);


