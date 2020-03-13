export default class userFactory {
	constructor($http) {
		'ngInject';
		var userFactory = {};
		userFactory.loggedUser = '';
		userFactory.GetUsers = function() {			
			return $http.get('http://localhost:3001/usuario');
		};
		userFactory.AddUser = function(user) {
			return $http.post('http://localhost:3001/usuario', {
				nombre: user.nombre,
				edad: user.edad,
				sexo: user.sexo,
				oficio: user.oficio,
				email: user.email,
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
				email: user.email,
				nacionalidad: user.nacionalidad,
				password: user.password
			});
		};
		userFactory.DeleteUser = function(id) {
			return $http.delete('http://localhost:3001/usuario/' + id);
		};
		userFactory.Login = function(user) {
			return $http.post('http://localhost:3001/login', {
				user
			});
		};
		return userFactory;
	}
}
