//import { createAction } from 'redux-actions';

import { getUserList } from "../../../Services/usuarios";

//export const fillUser = createAction('fillUser');

export const fillUser = () => async (dispatch: any) => {
	const users = await getUserList();
	dispatch({
		type: "fillUser",
		payload: users.data.usuariosList
	});
};
