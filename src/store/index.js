import {createStore} from 'redux';

import getReducers from '../reducers';

const initStore = initialState => {
	return createStore(getReducers(), initialState || {});
};

export default initStore;
