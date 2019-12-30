import React, {Component} from 'react';
const fetch = require(`cross-fetch`);
import queries from './queries'

export default class RepoTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			githubToken: props.githubToken || null,
		}
	}

	componentDidMount() {
		const {getRepoData} = this.props
		return getRepoData(`https://api.github.com/graphql`, {query:queries[0]})
	}



	render() {
		const {repoData} =this.props
		console.log('this.propssss: ', repoData, typeof repoData);
		let tmp = repoData ? repoData.data : []
		console.log('tmp: ', tmp, typeof tmp);
		return(
			<div>{tmp}WHAAAAATTT</div>
		)
	}
}