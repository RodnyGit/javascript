import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../navbar/nav';
import Page from './page';

import { fillUser } from '../../redux/actions/user.js';

class container extends Component {
	async componentDidMount() {
		this.props.fillUser();
	}
	render() {
		console.log(this.props);
		return (
			<div>
				<NavBar />
				<Page />
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

export default connect(mapStateToProps, mapDispatchToProps)(container);
