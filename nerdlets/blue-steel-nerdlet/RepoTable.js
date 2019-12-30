import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'nr1';
import queries from './queries';

export default class RepoTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			githubToken: props.githubToken || null,
			repoData: props.repoData || []
		};
	}

	componentDidMount() {
		const { getRepoData } = this.props;
		return getRepoData(`https://api.github.com/graphql`, {
			query:queries[0],
			variables: { "number_of_repos": 12 }
		});
	}

	render() {
		const { repoData } = this.props;
		return(
			<div>
				{repoData.data &&
					<Card>
						{repoData.data.viewer.repositories.nodes.map(n=>{
							console.log('n: ', n);
							return(
								<>
									<CardHeader title={n.name} key={`id-${n.createdAt}`} subtitle={n.createdAt}/>
									<CardBody>
										It's the card body!
									</CardBody>
								</>
							);
						})}
					</Card>
				}
			</div>
		);
	}
}