import React, {Component} from 'react';
import {UserStorageQuery,Toast} from 'nr1'
import RepoTable from './RepoTable'

export default class TableContainer extends Component {
	constructor(props) {
		super(props);
		this._getRepoData = this._getRepoData.bind(this);
		this._retrieveGithubToken = this._retrieveGithubToken.bind(this);
		this.state = {
			githubToken:props.githubToken ||null
		}
	}

	_retrieveGithubToken = async e => {
		console.log('e: ', e);
		UserStorageQuery.query({
			collection: `blue-steel`,
			documentId: 'global'
		})
				.then(data => {
					if (!data) {
						console.log(`Cannot`);
					}
					this.setState({ githubToken: data });
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

	_getRepoData = async () => {
		console.log('this.state: ', this.state);
		const repoData = await query();
		return repoData;
	};


	render() {
		return(
			<div>
				<RepoTable {...this.state} retrieveGithubToken={this._retrieveGithubToken}/>
			</div>)
	}
}