import userFactory from '../services/userFactory';

export default class logUserController {
	constructor($scope, userFactory, $ngRedux, $route, $location) {
		'ngInject';
		$scope.user = {};
		$scope.loggedUser = $ngRedux.getState().loggedUser;
		$scope.LogUser = () => {
			userFactory.Login($scope.user).then(function(response) {
				userFactory.loggedUser = response.data.user;
				$ngRedux.dispatch({ type: 'logUser', payload: userFactory.loggedUser });
				$scope.loggedUser = $ngRedux.getState().loggedUser;
				$scope.user = {};
				if ($scope.loggedUser.email === 'r.abadarocha@gmail.com') {
					console.log($scope.loggedUser.nombre);
					$location.path('/usuarios');
				} else {
					$location.path('/mercado');
				}
			});
		};
		$scope.AddUser = () => {
			$location.path('/addUser');
		};
	}
}
