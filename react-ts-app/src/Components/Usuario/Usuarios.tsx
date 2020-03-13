import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IUsuario } from '../../Interfaces/IUsuario';
import { IState } from '../../Interfaces/IState';
import { deleteUsuario } from '../../Services/usuarios';
import { fillUser } from './State/actions';

import Nav from '../Estructura/nav';
import Container from './container';

class Usuarios extends Component<any, IState> {
	async componentDidMount() {
		console.log(this.props);
		this.props.fillUser();
	}

	deleteUser = async (usuario: IUsuario) => {
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
						{users.map((item: IUsuario) => (
							<Container usuario={item} key={item._id} deleteUser={this.deleteUser} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state: IState) => ({
	estado: state
});

const mapDispatchToProps = {
	fillUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
