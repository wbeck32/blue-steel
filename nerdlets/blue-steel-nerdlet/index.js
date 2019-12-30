import React, { Component } from 'react';
import { Toast, UserStorageMutation } from 'nr1';
import query from './utils/github-query';
import ErrorBoundary from './utils/ErrorBoundary';
import Setup from './setup'
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class BlueSteelNerdlet extends Component {
	constructor(props) {
		super(props);
		this._getStuff = this._getStuff.bind(this);
		this._setGithubToken = this._setGithubToken.bind(this);
		this.state = {
			githubToken: 1234,
		};
	}

	_getStuff = async () => {
		const myRepos = await query();

		return myRepos;
	};

	_setGithubToken = async githubToken => {
		UserStorageMutation.mutate({
			actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
			collection: `blue-steel`,
			documentId: "global",
			document: { githubToken }
		})
				.then(() => {
					this.setState({githubToken})
					Toast.showToast({
						title: `Update Saved.`,
						type: Toast.TYPE.NORMAL
					});
				})
				.catch(error => {
					console.error(error);
					Toast.showToast({
						title: error.message,
						type: Toast.TYPE.CRITICAL
					});
				});
	}

	render() {
		console.log('this.state: ', this.state);

		return (
			<div>
				<ErrorBoundary>
					<Setup {...this.state} setGithubToken={this._setGithubToken}></Setup>
				</ErrorBoundary>
			</div>
		);
	}
}
