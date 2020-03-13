import { fillUser } from '../Actions/actions.js';

const initState = {
	data: 0
};

export default function reducers(state, action) {
	switch (action.type) {
		case 'fillUser':
			state.users = action.payload.users;
			return state;
		case 'inc':
			state.data = state.data + action.payload.data;
			return state;
		case 'dec':
			state.data = state.data - action.payload.data;
			return state;
		case 'reset':
			state.data = 0;
			return state;
		default:
			return state;
	}
}
