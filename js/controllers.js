angular.module('tmw.controllers', [])


.controller('tmwCtrl', function($scope, $ionicSideMenuDelegate) {

	$scope.menuItems = [
		{title: 'Events'}, {title: 'Notifications'}, {title: 'Friends'}, 
		{title: 'Why?'}, {title: 'Settings'}
	];

	$scope.toggleMenu = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
})

// A simple controller that fetches a list of data from a service
.controller('EventIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
