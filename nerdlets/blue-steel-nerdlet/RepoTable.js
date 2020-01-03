import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Dropdown,DropdownItem } from 'nr1';
import queries from './queries';
import ErrorBoundary from './ErrorBoundary';
import lodash from 'lodash';

export default class RepoTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			githubToken: props.githubToken || null,
			repoData: props.repoData || [],
		};
	}

	componentDidMount() {
		const { getRepoData, actionIndex } = this.props;
		let num = actionIndex.index <= 10 ? ( actionIndex.index-1 ) * 10 : null;
		return getRepoData(`https://api.github.com/graphql`, {
			query:queries[0],
			variables:  { "number_of_repos":num }
		});
	}


	render() {
		const { repoData } = this.props;
		return(
			<>
				{repoData.data &&
				<div>
				 {_.map(repoData.data.viewer, ((v,k) =>{
					 console.log('v,k: ', v,k);
						let random = Math.random();
						return _.map(v.nodes,((calue,cey)=>{
							return <div style={{ "marginLeft": "25px", "marginTop": "10px" }} key={`${calue.name}-${random}`}>{calue.name}</div>;
						}));
					}))
					}
				</div>
				}
			</>
		);
	}
}