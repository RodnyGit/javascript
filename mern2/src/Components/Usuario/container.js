import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Page from './page';

class Usuario extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Usuario: {}
		};
	}

	componentDidMount() {
		this.setUser();
	}

	setUser = async () => {
		await this.setState({
			Usuario: this.props.usuario
		});
	};
	onClick = (name, user) => {
		this.props.history.push(name, user);
	};

	deleteUser = () => {
		this.props.deleteUser(this.state.Usuario);
	};

	render() {    
		return <Page user={this.props.usuario} onClick={this.onClick} deleteUser={this.deleteUser} />;
	}
}

export default withRouter(Usuario);
