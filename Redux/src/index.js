//Importamos la funcion k contiene la logica del store para poder inyectarle dependencias
import { createStore } from './redux';

//nombres de los metodos que inyectaremos en el createStore de forma que
//estos son los que regulan cual action tiene permitido hacer modificaciones al global state
function reducer(state = {}, action) {
	switch (action.type) {
		case 'random number':
			return action.payload;
		case 'value + 1':
			return action.payload;
		default:
			return state;
	}
}
//instanciamos el store para poder hacer subscripciones y dispatch, en este momento ya estamos utilizando el globalState
const store = createStore(reducer);

function mostrar() {
	const state = store.getState();
	console.log(state);
}
//suscrbimos el modulo mostrar para que nos lleguen actualizaciones cada vez k se hagan cambios en el globalState
store.suscribe(mostrar);

//Creamos nuestro primer accion. k vendria siendo el metodo que realiza modificaciones sobre el globalState
setInterval(() => {
	store.dispatch({
		type: 'random number',
		payload: {
			value: Math.random()
		}
	});
}, 3000);
let num = 0;

setInterval(() => {
	store.dispatch({
		type: 'random number',
		payload: {
			value2: num++
		}
	});
}, 2000);
