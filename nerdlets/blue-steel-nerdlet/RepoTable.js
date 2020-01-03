import React, { Component } from 'react';
import { Card, CardHeader, CardBody, BlockText } from 'nr1';
import queries from './queries';
import ErrorBoundary from './ErrorBoundary';
import lodash from 'lodash';
import deepdash from 'deepdash-es';
const _ = deepdash(lodash);
import traverse from 'traverse';

export default class RepoTable extends Component {
	constructor(props) {
		super(props);
		// this._data = this._data.bind(this);

		this.state = {
			githubToken: props.githubToken || null,
			repoData: props.repoData || []
		};
	}

	componentDidMount() {
		const { getRepoData } = this.props;
		return getRepoData(`https://api.github.com/graphql`, {
			query:queries[0],
			variables:  { "number_of_repos":10 }
		});
	}


	render() {
		const { repoData } = this.props;
		return(
			<>
				{repoData.data &&
				<div>
				 {_.map(repoData.data.viewer, ((v,k) =>{
						let random = Math.random();
						if(k==='repos10') {
							return _.map(v.nodes,((calue,cey)=>{
								return <div style={{ "marginLeft": "25px", "marginTop": "10px" }} key={random}>{calue.name}</div>;
							}));
						}
					}))
					}
				</div>
				}
			</>
		);
	}
}