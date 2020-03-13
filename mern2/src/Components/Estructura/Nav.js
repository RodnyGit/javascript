import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div >
				<nav className="navbar navbar-expand-md bg-dark text-ligth">
					<button
						type="button"
						className="btn btn-outline-primary mr-2 btn-sm"
						onClick={() => this.props.history.goBack()}>
						«
					</button>
					<button
						type="button"
						className="btn btn-outline-primary mr-2 btn-sm"
						onClick={() => this.props.history.push('/')}>
						Home
					</button>
					<button
						type="button"
						className="btn btn-outline-primary mr-2 btn-sm"
						onClick={() => this.props.history.push('/usuarios')}>
						Usuarios
					</button>
					<button
						type="button"
						className="btn btn-outline-primary mr-2 btn-sm"
						onClick={() => this.props.history.push('/productos')}>
						Productos
					</button>
				</nav>
			</div>
		);
	}
}
export default withRouter(Nav);
