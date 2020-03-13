import userFactory from '../services/userFactory';

export default class addUserController {
	constructor($scope, userFactory, $ngRedux, $route, $location) {
		'ngInject';
		$scope.user = {};
		$scope.loggedUser = $ngRedux.getState().loggedUser;
        $scope.GetUser = () => {
			userFactory.GetUsers().then(function(response) {
				$scope.userList = response.data.usuariosList;
				console.log($scope.userList);
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
            $location.path('/')
		};
	}
}