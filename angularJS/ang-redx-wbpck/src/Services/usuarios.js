import axios from 'axios';

export function getUserList() {
	return axios.get('http://localhost:3001/usuario');
};
export function postUser(data) {
	return axios.post('http://localhost:3001/usuario', data);
};

export function getUser(id) {
	return axios.get('http://localhost:3001/usuario/' + id);
}

export function putUser(data, id) {
	return axios.put('http://localhost:3001/usuario/' + id, data);
}

export function deleteUsuario(id) {
	return axios.delete('http://localhost:3001/usuario/' + id);
}
