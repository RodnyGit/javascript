//import { fillUser } from '../Actions/actions.js';

const initState = {
	cart: {
		user: {},
		products: []
	}
};

export default function reducers(state, action) {
	switch (action.type) {
		case 'removeFromCart':
			state.loggedUser.items = state.loggedUser.items.filter((e) => {
				return e !== action.payload.product;
			});
			return state;
		case 'addToCart':
			if (state.loggedUser.items) {
				state.loggedUser.items.push(action.payload);
			} else {
				state.loggedUser.items = [ action.payload ];
			}
			return state;
		case 'logUser':
			state.loggedUser = action.payload[0];
			return state;
		default:
			return state;
	}
}
