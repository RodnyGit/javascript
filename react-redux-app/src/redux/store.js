import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import fillUser from './reducer/user';

const reducer = combineReducers({
	fillUser
});

// const logger=(store)=>(next)=>(action)=>{
// 	console.log(action);
// 	next(action);
// }

export default createStore(reducer, applyMiddleware(thunk));
