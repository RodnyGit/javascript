import productFactory from '../services/productFactory';

export default class mercadoController {
	constructor($scope, productFactory, $ngRedux, $route, $location) {
		'ngInject';
		$scope.productList = [];
		$scope.product = {};
		$scope.loggedUser = $ngRedux.getState().loggedUser;
		$scope.GetProduct = () => {
			productFactory.GetProducts().then(function(response) {
				$scope.productList = response.data.productosList;
			});
			if (!$ngRedux.getState().loggedUser) {
				$location.path('/');
			}
		};
		$scope.CalcularPrecio = () => {
			$scope.factura = 0;
			$ngRedux.getState().loggedUser.items.map((e) => {
				$scope.factura += e.product.precio;
			});
		};
		$scope.AddToCart = (product) => {
			$ngRedux.dispatch({
				type: 'addToCart',
				payload: { product: product }
			});
			$scope.loggedUser = $ngRedux.getState().loggedUser;
			$scope.CalcularPrecio();
		};
		$scope.RemoveFromCart = (product) => {
			$ngRedux.dispatch({
				type: 'removeFromCart',
				payload: { product: product }
			});
			$scope.CalcularPrecio();
		};
		$scope.GetProduct();
	}
}
