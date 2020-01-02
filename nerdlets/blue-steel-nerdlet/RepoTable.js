import React, { Component } from 'react';
import { Card, CardHeader, CardBody, BlockText } from 'nr1';
import queries from './queries';
import ErrorBoundary from './ErrorBoundary';
import _ from 'lodash';

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
			variables:  { "number_of_repos":5 }
		});
	}


	render() {
		const { repoData } = this.props;
		const Data=data =>{
			const nestedData = _.map(_.reduce(data), ((e,f)=>{
				let random = Math.random();
				return <div key={random}>hello:{f}</div>;
			}));
			return(
				<div>{nestedData}</div>
			);};
		return(
			<div>
				{repoData.data &&
				<div>
					{_.map(_.reduce(repoData), ((v,k) =>{
						let random = Math.random();
						if (_.isString(k)) {
							return <Data data={v} key={random}>{k}</Data>;
						}
					}))
					}
				</div>
				}
			</div>
		);
	}
}