//Importamos la funcion k contiene la logica del store para poder inyectarle dependencias
// import { createStore } from './redux';

//nombres de los metodos que inyectaremos en el createStore de forma que
//estos son los que regulan cual action tiene permitido hacer modificaciones al global state
function reducer(state = {}, action) {
	switch (action.type) {
		case 'logUser':
			return (state = action.payload);
		default:
			return state;
	}
}

module.exports = reducer;



