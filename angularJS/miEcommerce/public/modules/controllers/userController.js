angular.module('MiniEcommerce').controller('userController', function($scope, userFactory) {
	$scope.userList = [];
	$scope.user = {};
	$scope.GetUser = function() {
		userFactory.GetUsers().then(function(response) {
			$scope.userList = response.data.usuariosList;
		});
	};
	$scope.AddUser = function() {
		userFactory.AddUser($scope.user).then(function(response) {
			$scope.GetUser();
			$scope.user = {};
			if (!response.data.ok) {
				console.log('Ese correo ya existe');
			}
		});
	};
	$scope.UpdateUser = function(id) {
		userFactory.UpdateUser(id, $scope.user).then(function(response) {
			$scope.GetUser();
			$scope.user = {};
			console.log(response);
		});
	};
	$scope.DeleteUser = function(id) {
		userFactory.DeleteUser(id).then(function(response) {
			$scope.GetUser();
			console.log(response);
		});
	};
	$scope.LogUser = function() {
		userFactory.Login($scope.user).then(function(response) {
			userFactory.loggedUser = response.data.user;
			$scope.loggedUser = userFactory.loggedUser;
		});
	};
	$scope.GetUser();
});
