'use strict'

var app = angular.module('app', ['ngMaterial', 'ngAnimate']);

app.controller('AppCtrl', function ($scope, $mdSidenav) {
  $scope.openRightMenu = function() {
    $mdSidenav('right').toggle();
  };
});