angular.module('MiniEcommerce').config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'vistas/home.html'
		})
		.when('/users', {
			templateUrl: 'vistas/usuarios.html'
		});
});
