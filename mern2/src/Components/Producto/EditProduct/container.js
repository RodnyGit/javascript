import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { putProduct } from '../../../Services/productos';
import Page from './page';

class EditProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: '',
			marca: '',
			precio: '',
			distribuidor: '',
			tipo: ''
		};
		this.eventoTextChanged = this.eventoTextChanged.bind(this);
		this.eventoSubmit = this.eventoSubmit.bind(this);
	}

	eventoSubmit = async (e) => {
		e.preventDefault();
		const data = {
			nombre: this.state.nombre,
			marca: this.state.marca,
			precio: this.state.precio,
			distribuidor: this.state.distribuidor,
			tipo: this.state.tipo
		};
		await putProduct(data, this.props.location.state._id);
		this.props.history.push('/productos');
	};

	eventoTextChanged(campo, valor) {
		this.setState({ [campo]: valor });
	}

	render() {
		const { nombre, marca, precio, distribuidor, tipo } = this.props;
		return (
			<Page
				nombre={nombre}
				marca={marca}
				precio={precio}
				distribuidor={distribuidor}
				tipo={tipo}
				eventoTextChanged={this.eventoTextChanged}
				eventoSubmit={this.eventoSubmit}
				state={this.state}
			/>
		);
	}
}
export default withRouter(EditProduct);
