import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'nr1';
import queries from './queries';

export default class RepoTable extends Component {
	constructor(props) {
		super(props);
		// this.deepIterator = this.deepIterator.bind(this);

		this.state = {
			githubToken: props.githubToken || null,
			repoData: props.repoData || []
		};
	}

	componentDidMount() {
		// console.log('queries[0]: ', queries[2]);
		const { getRepoData } = this.props;
		return getRepoData(`https://api.github.com/graphql`, {
			query:queries[2],
			variables:  { "number_of_repos":20 }
		});
	}

	render() {
		const { repoData } = this.props;
		console.log('repoData: ', Object.values(repoData));
		let data = Object.values(repoData);
		const recurse = data => {
			console.log('data: ', data);
			if(typeof data === 'object') {
				data.map(d =>{
					console.log('d: ', d, Object.values(d).length);
					if(Object.values(d).length > 0) {
						console.log('Object.values(d): ', Object.values(d));
						data = Object.values(Object.values(d));
						recurse(data);
					}
				});
			}
			else return;
		};
		recurse(data);
		return(
			<div>{repoData.data &&
				<div>
wha
				</div>
			}

			</div>
		);
	}
}