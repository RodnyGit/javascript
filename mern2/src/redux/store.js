import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import fillUser from '../Components/Usuario/State/reducers';
import fillProduct from '../Components/Producto/State/reducers';

const reducer = combineReducers({
	fillUser,
	fillProduct
});

// const logger=(store)=>(next)=>(action)=>{
// 	console.log(action);
// 	next(action);
// }

export default createStore(reducer, applyMiddleware(thunk));
