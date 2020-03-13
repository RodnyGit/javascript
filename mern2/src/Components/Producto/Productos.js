import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteProducto } from '../../Services/productos';
import Nav from '../Estructura/Nav.js';
import Container from './container';

import { fillProduct } from './State/actions.js';

class Productos extends Component {
	async componentDidMount() {
		this.props.fillProduct();
	}

	deleteProduct = async (producto) => {
		await deleteProducto(producto._id);
		this.props.fillProduct();
	};

	render() {
		const products = this.props.estado.fillProduct;

		return (
			<div>
				<Nav />
				<div>
					<div className="row container mt-2">
						<button
							type="button"
							className="btn btn-dark text-info btn-sm ml-1"
							onClick={() => this.props.history.push('/AddProduct')}>
							Agregar
						</button>
					</div>
					<div className="row container">
						{products.map((item) => (
							<Container producto={item} key={item._id} deleteProduct={this.deleteProduct} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	estado: state
});

const mapDispatchToProps = {
	fillProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Productos);
