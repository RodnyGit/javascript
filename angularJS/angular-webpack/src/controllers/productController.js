import productFactory from '../services/productFactory';

export default class productController {
	constructor($scope, productFactory, $ngRedux, $route, $location) {
		'ngInject';
		$scope.productList = [];
		$scope.product = {};
		$scope.loggedUser = $ngRedux.getState().loggedUser;
		$scope.GetProduct = () => {
			productFactory.GetProducts().then(function(response) {
				$scope.productList = response.data.productosList;
			});
			if (!$ngRedux.getState().loggedUser) {
				$location.path('/');
			} else if ($ngRedux.getState().loggedUser.email !== 'r.abadarocha@gmail.com') {
				$location.path('/');
			}
		};
		$scope.AddProduct = () => {
			productFactory.AddProduct($scope.product).then(function(response) {
				$scope.GetProduct();
				$scope.product = {};
			});
		};
		$scope.UpdateProduct = (id) => {
			productFactory.UpdateProduct(id, $scope.product).then(function(response) {
				$scope.GetProduct();
				$scope.product = {};
			});
		};
		$scope.DeleteProduct = (id) => {
			productFactory.DeleteProduct(id).then(function(response) {
				$scope.GetProduct();
			});
		};
		$scope.GetProduct();
	}
}
