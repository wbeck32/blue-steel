import React, { Component } from 'react';
import TokenContainer from './TokenContainer'
import TableContainer from './TableContainer';

export default class BlueSteelNerdlet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			githubToken: props.githubToken || null
		};
	}

	render() {
		console.log('this.state: ', this.state);
		return (
			<div>
				<TokenContainer {...this.state}/>
				<TableContainer {...this.state}/>
			</div>
		);
	}
}
