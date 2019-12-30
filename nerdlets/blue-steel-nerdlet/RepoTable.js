import React, {Component} from 'react';
const fetch = require(`cross-fetch`);

export default class RepoTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			githubToken: props.githubToken || null,
			repoData: props.repoData || null
		}
	}


	componentDidMount() {
		const {getRepoData} = this.props
		const d = getRepoData(`https://api.github.com/graphql`)
		console.log('d: ', d, this);
	}




	render() {
		console.log('this: ', this.props, this.state);
		const {repoData} =this.props
		console.log('repoData: ', repoData, this);
		return(
			<div>{repoData}WHAAAAATTT</div>
		)
	}
}