import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteUsuario } from '../../Services/usuarios';
import { fillUser } from './State/actions.js';

import Nav from '../Estructura/Nav.js';
import Container from './container';

class Usuarios extends Component {
	async componentDidMount() {
		this.props.fillUser();		
	}

	deleteUser = async (usuario) => {
		await deleteUsuario(usuario._id);
		this.props.fillUser();
	};

	render() {
		const users = this.props.estado.fillUser;
		return (
			<div>
				<Nav />
				<div>
					<div className="row container mt-2">
						<button
							type="button"
							className="btn btn-dark text-info btn-sm ml-1"
							onClick={() => this.props.history.push('/AddUser')}>
							Agregar
						</button>
					</div>
					<div className="row container">
						{users.map((item) => <Container usuario={item} key={item._id} deleteUser={this.deleteUser} />)}
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
	fillUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
