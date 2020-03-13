import { handleActions } from "redux-actions";

export default handleActions(
	{
		fillUser: (state, action) => {
			state = action.payload;
			return state;
		}
	},
	[]
);

// export default async (state, { type, payload }) => {
// 	state= await getUser();
// 	switch (type) {
// 	case 'fillUser':
// 		return [...state.data]
// 	default:
// 		return state
// 	}
// }
