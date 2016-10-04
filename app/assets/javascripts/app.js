angular.module('app', ['ngMaterial', 'ngAnimate']);

angular.module('app').controller('AppCtrl', ['$mdSidenav', function ($mdSidenav) {
	var vm = this;

  	vm.openRightMenu = function() {
    	$mdSidenav('right').toggle();
  	};
}]);