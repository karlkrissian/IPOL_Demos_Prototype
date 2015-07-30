'use strict';

//inject angular file upload directives and services.
var IPOLImgCrop = angular.module('IPOLImgCrop', ['ngImgCrop']);

IPOLImgCrop.controller('ImgCropCtrl', ['$scope', function($scope) {
  $scope.size='small';
  $scope.type='rectangle';
  $scope.resImageDataURI='';
  $scope.resImgFormat='image/png';
  $scope.resImgQuality=1;
  $scope.selMinSize=100;
  $scope.resImgSize=200;
  
  $scope.myImage='';
  $scope.myCroppedImage='';
  $scope.myAreaCoords = {};

  $scope.go = function() {
    $scope.myImage = $scope.$parent.selected_image_link;
  }
  
//     var handleFileSelect=function(evt) {
//       var file=evt.currentTarget.files[0];
//       var reader = new FileReader();
//       reader.onload = function (evt) {
//         $scope.$apply(function($scope){
//           $scope.myImage=evt.target.result;
//         });
//       };
//       reader.readAsDataURL(file);
//     };
//     angular.element(document.querySelector('#checkEnableCrop')).on('change',handleFileSelect);
}]);


