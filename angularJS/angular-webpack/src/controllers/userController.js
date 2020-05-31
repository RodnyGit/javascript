import userFactory from '../services/userFactory';

export default class userController {
	constructor($scope, userFactory, $ngRedux, $route, $location) {
		'ngInject';
		$scope.userList = [];
		$scope.user = {};
		$scope.loggedUser = $ngRedux.getState().loggedUser;
		$scope.GetUser = () => {
			userFactory.GetUsers().then(function (response) {
				$scope.userList = response.data.usuariosList;
				console.log($scope.userList);
			});
			if (!$ngRedux.getState().loggedUser) {
				$location.path('/');
			} else if ($ngRedux.getState().loggedUser.email !== 'r.abadarocha@gmail.com') {
				$location.path('/');
			}
		};
		$scope.AddUser = function () {
			userFactory.AddUser($scope.user).then(function (response) {
				$scope.GetUser();
				$scope.user = {};
				if (!response.data.ok) {
					console.log('Ese correo ya existe');
				}
			});
		};
		$scope.UpdateUser = function (id) {
			userFactory.UpdateUser(id, user).then(function (response) {
				$scope.GetUser();
				$scope.user = {};
			});
		};
		$scope.DeleteUser = function (id) {
			userFactory.DeleteUser(id).then(function (response) {
				$scope.GetUser();
			});
		};
		$scope.LogUser = function () {
			userFactory.Login($scope.user).then(function (response) {
				userFactory.loggedUser = response.data.user;
				$ngRedux.dispatch({ type: 'logUser', payload: userFactory.loggedUser });
				$scope.loggedUser = $ngRedux.getState().loggedUser;
				$scope.user = {};
				if ($scope.loggedUser.nombre === 'admin') {
					console.log($scope.loggedUser.nombre);
					$location.path('/adminPage');
				} else {
					$location.path('/mercado');
				}
			});
		};
		$scope.GetUser();
	}
}
