import React, { Component } from 'react';
import SetToken from './SetToken';
import RepoTable from './RepoTable';
import { Toast, UserStorageMutation } from 'nr1';
import PropTypes from 'prop-types';

export default class PageContainer extends Component {
	constructor(props) {
		super(props);
		this._setGithubToken = this._setGithubToken.bind(this);
		this._query = this._query.bind(this);
		this.state = {
			githubToken: props.githubToken || null,
			repoData: props.repoData || [],
		};
	}

	_setGithubToken = async (githubToken, actionIndex) => {
		UserStorageMutation.mutate({
			actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
			collection: `blue-steel`,
			documentId: "global",
			document: { githubToken }
		})
				.then(() => {
					this.setState({ githubToken, actionIndex });
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

	_query = async (apiUrl, data = { query: ``, variables: null }) => {
		return await fetch(apiUrl, {
			method: `POST`,
			mode: `cors`,
			cache: `no-cache`,
			headers: {
				"Content-Type": `application/json`,
				Authorization: `token ${ this.state.githubToken }`
			},
			body: JSON.stringify(data)
		})
				.then(val=>val.json())
				.then(repoData =>this.setState({ repoData }));
	};


	render() {
		const { githubToken, repoData } = this.state;
		return (
			<>
				{githubToken && <RepoTable {...this.state} getRepoData={this._query} repoData={repoData}/>}
				{!githubToken && <SetToken {...this.state} setGithubToken={this._setGithubToken}/>}
			</>);
	};
}
