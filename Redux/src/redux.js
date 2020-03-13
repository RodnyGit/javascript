function createStore(reducer) {
  let state= {};
  const suscribers= [];//Lista de posibles subscriptores
  const store= {
    getState() {
      return { ...state };
    },
    dispatch(action) {
      state= reducer(state, action);
      for (const callback of suscribers) {
        callback(state);
      }
    },
    suscribe(callback) {
      suscribers.push(callback);
    },
  };
  return store;
}
export {createStore};