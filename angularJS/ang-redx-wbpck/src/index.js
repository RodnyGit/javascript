import angApp from 'angular';
import miController from './miController.js';

import ngRedux from 'ng-redux';
import reducers from './Redux/Reducers/reducers.js';

angApp
	.module('rdxApp', [ ngRedux ])
	.config(($ngReduxProvider) => {
		$ngReduxProvider.createStoreWith(reducers);
	})
	.controller('miController', miController);
