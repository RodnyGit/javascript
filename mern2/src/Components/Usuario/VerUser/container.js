import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Page from './page';

class VerUsuario extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props
		};
	}

	render() {
		return <Page user={this.state.user.location.state} />;
	}
}
export default withRouter(VerUsuario);
