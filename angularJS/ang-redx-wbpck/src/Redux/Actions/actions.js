import { getUserList } from '../../Services/usuarios.js';

//export const fillUser = createAction('fillUser');

export const fillUser = () => async (dispatch) => {
	const users = await getUserList();
	dispatch({
		type: 'fillUser',
		payload: users.data.usuariosList
	});
};
