angular.module('MiniEcommerce').controller('productController', function($scope, productFactory) {
	$scope.productList = [];
	$scope.product = {};
	$scope.GetProduct = function() {
		productFactory.GetProducts().then(function(response) {
			$scope.productList = response.data.productosList;
			console.log($scope.productList);
		});
	};
	$scope.AddProduct = function() {				
		productFactory.AddProduct($scope.product).then(function(response) {
			$scope.GetProduct();
			$scope.product = {};
			console.log(response);
		});
	};
	$scope.UpdateProduct = function(id) {
		productFactory.UpdateProduct(id, $scope.product).then(function(response) {
			$scope.GetProduct();
			$scope.product = {};
			console.log(response);
		});
	};
	$scope.DeleteProduct = function(id) {
		productFactory.DeleteProduct(id).then(function(response) {
			$scope.GetProduct();
			console.log(response);
		});
	};
	$scope.GetProduct();
});
