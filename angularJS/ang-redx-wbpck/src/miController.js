import { fillUser } from './Redux/Actions/actions.js';

export default class miController {
	constructor($scope, $ngRedux) {
		'ngInject';
		$scope.data = $ngRedux.getState().data;
		$ngRedux.dispatch({ type: 'reset' });
		$scope.incre = function(data = 5) {
			$ngRedux.dispatch({ type: 'inc', payload: { data: data } });
			console.log($ngRedux.getState());
			$scope.data = $ngRedux.getState().data;
		};
		$scope.decre = function(data = 5) {
			$ngRedux.dispatch({ type: 'dec', payload: { data: data } });
			console.log($ngRedux.getState());
			$scope.data = $ngRedux.getState().data;
		};

		
	}
}
