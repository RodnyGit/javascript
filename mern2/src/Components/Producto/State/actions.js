//import { createAction } from 'redux-actions';

import { getProductList } from "../../../Services/productos";

//export const fillUser = createAction('fillUser');

export const fillProduct = () => async dispatch => {
	const products = await getProductList();
	dispatch({
		type: "fillProducts",
		payload: products.data.productosList
	});
};
