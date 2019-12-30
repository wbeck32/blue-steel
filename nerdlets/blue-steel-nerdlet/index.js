import React, { Component } from 'react';
import PageContainer from './PageContainer';
import PropTypes from 'prop-types';

export default class BlueSteelNerdlet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			githubToken: props.githubToken || null
		};
	}

	render() {
		return (
			<div>
				<PageContainer {...this.state}/>
			</div>
		);
	}
}
