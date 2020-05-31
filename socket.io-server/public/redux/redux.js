function createStore(reducer) {
	let state = {};
	let suscribers = []; //Lista de posibles subscriptores
	const store = {
		getState() {
			return { ...state };
		},
		dispatch(action) {
			state = reducer(state, action);
			for (const callback of suscribers) {
				callback(state);
			}
		},
		subscribe(callback) {
			suscribers.push(callback);
		}
	};
	return store;
}
module.exports = createStore;
