angular.module('app', ['ngMaterial', 'ngAnimate', 'uiSwitch']);

angular.module('app').controller('AppCtrl', ['$mdSidenav', function ($mdSidenav) {
	var vm = this;

  	vm.openRightMenu = function() {
    	$mdSidenav('right').toggle();
  	};
}]);