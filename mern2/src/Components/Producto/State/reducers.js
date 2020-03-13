import { handleActions } from 'redux-actions';

export default handleActions(
	{
		fillProducts: (state, action) => {
			state = action.payload;
			return state;
		}
	},
	[]
);

// export default async (state, { type, payload }) => {
// 	state= await getUser();
// 	switch (type) {
// 	case 'fillProducts':
// 		return [...state.data]
// 	default:
// 		return state
// 	}
// }
