import React, {Component} from 'react';
import SetToken from './SetToken'
import { Toast, UserStorageMutation, UserStorageQuery} from 'nr1';

export default class TokenContainer extends Component {
	constructor(props) {
		super(props);
		this._setGithubToken = this._setGithubToken.bind(this);
		this.state = {
			githubToken:props.githubToken || null
		}
	}

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
		console.log(this.state)
		return (
			<div>
				<SetToken {...this.state} setGithubToken={this._setGithubToken}/>
			</div>);
	};
}
