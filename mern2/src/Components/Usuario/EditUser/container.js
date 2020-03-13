import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { putUser } from '../../../Services/usuarios';
import Page from './page';

class EditUsuario extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: '',
			edad: '',
			sexo: '',
			oficio: '',
			nacionalidad: ''
		};
		this.eventoTextChanged = this.eventoTextChanged.bind(this);
		this.eventoSubmit = this.eventoSubmit.bind(this);
	}

	eventoSubmit = async (e) => {
		e.preventDefault();
		const data = {
			nombre: this.state.nombre,
			edad: this.state.edad,
			sexo: this.state.sexo,
			oficio: this.state.oficio,
			nacionalidad: this.state.nacionalidad
		};
		console.log(data);
		await putUser(data, this.props.location.state._id);
		this.setState({
			nombre: '',
			edad: '',
			sexo: '',
			oficio: '',
			nacionalidad: ''
		});
	};

	eventoTextChanged(campo, valor) {
		this.setState({ [campo]: valor });
	}

	render() {
		const { nombre, edad, sexo, oficio, nacionalidad } = this.props;
		console.log(this.props);
		return (
			<Page
				nombre={nombre}
				edad={edad}
				sexo={sexo}
				oficio={oficio}
				nacionalidad={nacionalidad}
				eventoTextChanged={this.eventoTextChanged}
				eventoSubmit={this.eventoSubmit}
			/>
		);
	}
}
export default withRouter(EditUsuario);
