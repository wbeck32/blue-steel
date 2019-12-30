import React, {Component} from 'react';
const fetch = require(`cross-fetch`);

export default class RepoTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			githubToken: props.githubToken || null,
		}
	}


	componentDidMount() {
		const {getRepoData} = this.props
		return getRepoData(`https://api.github.com/graphql`)
	}




	render() {
		const {repoData} =this.props
		let tmp = repoData ? repoData.data.viewer.login : 'whut'
		return(
			<div>{tmp}WHAAAAATTT</div>
		)
	}
}