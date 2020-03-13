angular.module('MiniEcommerce').config([
	'$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/home.html',
				controller: 'userController'
			})
			.when('/productos', {
				templateUrl: 'templates/productos.html',
				controller: 'productController'
			})
			.when('/usuarios', {
				templateUrl: 'templates/usuarios.html',
				controller: 'userController'
			})
			.when('/login', {
				templateUrl: 'templates/login.html',
				controller: 'userController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
]);
