angular.module('MiniEcommerce').factory('userFactory', function($http) {
	var userFactory = {};
	userFactory.GetUsers = function() {
		return $http.get('http://localhost:3001/usuario');
	};
	userFactory.AddUser = function(user) {
		return $http.post('http://localhost:3001/usuario', {
			nombre: user.nombre,
			edad: user.edad,
			sexo: user.sexo,
			oficio: user.oficio,
			nacionalidad: user.nacionalidad,
			password: user.password
		});
	};
	userFactory.UpdateUser = function(id, user) {
		return $http.put('http://localhost:3001/usuario/' + id, {
			nombre: user.nombre,
			edad: user.edad,
			sexo: user.sexo,
			oficio: user.oficio,
			nacionalidad: user.nacionalidad,
			password: user.password
		});
	};
	userFactory.DeleteUser = function(id) {
		return $http.delete('http://localhost:3001/usuario/' + id);
	};
	return userFactory;
});
