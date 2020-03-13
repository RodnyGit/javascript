//import { createAction } from 'redux-actions';

import { getUser } from '../../service/user';

//export const fillUser = createAction('fillUser');

export const fillUser = () => async (dispatch) => {
	const users = await getUser();
	dispatch({
		type: 'fillUser',
		payload: users.data.usuariosList
	});
};
