import React, { Component } from 'react';
import ErrorBoundary from './utils/ErrorBoundary';
import TokenContainer from './TokenContainer'
import TableContainer from '../TableContainer';

export default class BlueSteelNerdlet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			githubToken: null,
			isTokenSet: false
		};
	}

	render() {
		const {isTokenSet, githubToken} = this.state
		console.log('this.state: ', this.state);
		return (
			<div>
				<ErrorBoundary>
					<Stack alignmentType="center">
						<TokenContainer/>
						<TableContainer/>
					</Stack>
				</ErrorBoundary>
			</div>
		);
	}
}
