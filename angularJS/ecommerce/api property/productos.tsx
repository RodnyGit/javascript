import axios from 'axios';

export function getProductList() {
	return axios.get('http://localhost:3001/producto');
}
export function postProduct(data: {}) {
	return axios.post('http://localhost:3001/producto', data);
}

export function getProduct(id: string) {
	return axios.get('http://localhost:3001/producto/' + id);
}

export function putProduct(data: {}, id: string) {
	return axios.put('http://localhost:3001/producto/' + id, data);
}

export function deleteProducto(id: string) {
	return axios.delete('http://localhost:3001/producto/' + id);
}
