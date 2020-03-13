import angular from 'angular';
import { ngRoute } from 'angular-route';

import ngRedux from 'ng-redux';
import reducers from './Redux/Reducers/reducers.js';

import userFactory from './services/userFactory.js';
import productFactory from './services/productFactory.js';
import userController from './controllers/userController.js';
import addUserController from './controllers/addUserController.js';
import productController from './controllers/productController.js';
import logUserController from './controllers/logUserController.js';
import mercadoController from './controllers/mercadoController.js';

angular
	.module('test', [ 'ngRoute', ngRedux ])
	.config(($ngReduxProvider) => {
		$ngReduxProvider.createStoreWith(reducers);
	})
	.config(($routeProvider) => {
		$routeProvider
			.when('/', {
				templateUrl: 'src/templates/home.html',
				controller: 'userController'
			})
			.when('/productos', {
				templateUrl: 'src/templates/productos.html',
				controller: 'productController'
			})
			.when('/usuarios', {
				templateUrl: 'src/templates/usuarios.html',
				controller: 'userController'
			})
			.when('/login', {
				templateUrl: 'src/templates/login.html',
				controller: 'logUserController'
			})
			.when('/addUser', {
				templateUrl: 'src/templates/addUser.html',
				controller: 'addUserController'
			})
			.when('/mercado', {
				templateUrl: 'src/templates/mercado.html',
				controller: 'mercadoController'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.factory('userFactory', userFactory)
	.factory('productFactory', productFactory)
	.controller('userController', userController)
	.controller('addUserController', addUserController)
	.controller('productController', productController)
	.controller('logUserController', logUserController)
	.controller('mercadoController', mercadoController)
	.run();
