angular.module('MiniEcommerce').factory('productFactory', function($http) {
	var productFactory = {};
	productFactory.GetProducts = function() {
		return $http.get('http://localhost:3001/producto');
	};
	productFactory.AddProduct = function(product) {
		return $http.post('http://localhost:3001/producto', {
			nombre: product.nombre,
			marca: product.marca,
			precio: product.precio,
			tipo: product.tipo,
			distribuidor: product.distribuidor
		});
	};
	productFactory.UpdateProduct = function(id, product) {
		return $http.put('http://localhost:3001/producto/' + id, {
			nombre: product.nombre,
			marca: product.marca,
			precio: product.precio,
			tipo: product.tipo,
			distribuidor: product.distribuidor
		});
	};
	productFactory.DeleteProduct = function(id) {
		return $http.delete('http://localhost:3001/producto/' + id);
	};
	return productFactory;
});
