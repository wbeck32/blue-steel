import React, {Component} from 'react';
import RepoTable from './RepoTable'
import { Toast, UserStorageMutation, UserStorageQuery, Stack } from 'nr1';



export default class TableContainer extends Component {
	constructor(props) {
		super(props);
		this._getRepoData = this._getRepoData.bind(this);
		this.state = {
			githubToken: null,
			isTokenSet:false
		};
	}

	_getRepoData = async () => {
		console.log('this.state: ', this.state);
		const repoData = await query();
		return repoData;
	};


	render() {
		return(<div>
			<RepoTable/>

		</div>)


	}
}