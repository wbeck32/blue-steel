import React, { Component } from 'react';
import { Toast, UserStorageMutation, UserStorageQuery } from 'nr1';
import query from './utils/github-query';
import ErrorBoundary from './utils/ErrorBoundary';
import Setup from './Setup'
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class BlueSteelNerdlet extends Component {
	constructor(props) {
		super(props);
		this._getRepoData = this._getRepoData.bind(this);
		this._setGithubToken = this._setGithubToken.bind(this);
		this._retrieveGithubToken = this._retrieveGithubToken.bind(this);

		this.state = {
			githubToken: null,
			isTokenSet:false
		};
	}

	_getRepoData = async () => {
		const repoData = await query();
		return repoData;
	};

	_setGithubToken = async githubToken => {
		UserStorageMutation.mutate({
			actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
			collection: `blue-steel`,
			documentId: "global",
			document: { githubToken }
		})
				.then(() => {
					this.setState({githubToken, isTokenSet:true})
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

	_retrieveGithubToken = async () => {
		UserStorageQuery.query({
			collection: `blue-steel`,
			documentId: 'global'
		})
				.then(data => {
					console.log('data: ', data);
					if (!data) {
						console.log(`Cannot`);
					}
					console.debug(data);
					this.setState({ githubToken: data.githubToken });
				})
				.catch(error => {
					console.error(error);
					this.setState({ githubToken: `` });
					Toast.showToast({
						title: error.message,
						type: Toast.TYPE.CRITICAL
					});
				});
	};

	render() {
		const {isTokenSet} = this.state
		console.log('this.state: ', this.state);
		return (
			<div>
				<ErrorBoundary>
					{!isTokenSet && <Setup {...this.state} setGithubToken={this._setGithubToken}></Setup>}
					{isTokenSet && <Setup {...this.state} retrieveGithubToken={this._retrieveGithubToken}></Setup>}
				</ErrorBoundary>
			</div>
		);
	}
}
