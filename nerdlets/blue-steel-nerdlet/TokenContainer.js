import React, {Component} from 'react';
import Setup from './Setup'
import { Toast, UserStorageMutation, UserStorageQuery, StackItem } from 'nr1';

export default class TokenContainer extends Component {
	constructor(props) {
		super(props);
		this._setGithubToken = this._setGithubToken.bind(this);
		this._retrieveGithubToken = this._retrieveGithubToken.bind(this);
		this.state = {
			githubToken: null,
			isTokenSet:false
		};
	}

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
					if (!data) {
						console.log(`Cannot`);
					}
					console.log('data: ', data);
					this.setState({ githubToken: data.githubToken, isTokenSet:this.state.isTokenSet });
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
		const {githubToken,isTokenSet} = this.state
		console.log('githubToken,isTokenSet: ', githubToken,isTokenSet);
		return (
			<div>
				<StackItem>
					{!isTokenSet && <Setup {...this.state} setGithubToken={this._setGithubToken}/>}
					{isTokenSet && <Setup {...this.state} retrieveGithubToken={this._retrieveGithubToken}/>}
				</StackItem>
			</div>
		);
	};
}
