import React, { Component } from 'react';

import { postUser } from '../../../Services/usuarios';
import Page from './page';

export default class AddUser extends Component<any, any> {
	constructor(props: any) {
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

	eventoSubmit = async (e: any) => {
		const data = {
			nombre: this.state.nombre,
			edad: this.state.edad,
			sexo: this.state.sexo,
			oficio: this.state.oficio,
			nacionalidad: this.state.nacionalidad
		};
		await postUser(data);
		this.setState({
			nombre: '',
			edad: '',
			sexo: '',
			oficio: '',
			nacionalidad: ''
		});
	};

	eventoTextChanged(campo: any, valor: any) {
		this.setState({ [campo]: valor });
	}
	render() {
		const { nombre, edad, sexo, oficio, nacionalidad } = this.props;
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
