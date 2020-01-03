import React, { Component } from 'react';
import { Card, CardHeader, CardBody, HeadingText } from 'nr1';
import queries from './queries';
import _ from 'lodash';

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
		let num = actionIndex.index <= 10 ? ( actionIndex.index ) * 10 : null;
		// TODO: get queries by index instead of hard-coding array value
		return getRepoData(`https://api.github.com/graphql`, {
			query:queries[0],
			variables:  { "number_of_repos":num }
		});
	}


	render() {
		const { repoData, actionIndex } = this.props;
		// TODO: more styling and accessibility
		return(
			<>
				<HeadingText spacingType={[ HeadingText.SPACING_TYPE.EXTRA_LARGE ]}>Last {actionIndex.index*10} repositories updated</HeadingText>
				{repoData.data &&
				<Card style={{ border:'2px solid #3A8B99' }}>
					<div>
				 {_.map(repoData.data.viewer, ((v,k) =>{
					 return _.map(v.nodes,((value,repoKey)=>{
								let random = Math.random();
								// TODO: normalize date format
								return (<CardHeader style={{ borderBottom:'2px solid #3A8B99' }} title={value.name} key={`${value.name}-${random}`} subtitle={`Last updated: ${value.updatedAt}`}>
									<CardBody>
										{/* TODO: add content! */}
										<img src={value.openGraphImageUrl}/>;
										{_.map(value,((val,key)=>{
											// TODO: I'd like to iterate through all the key-value pairs and show the needed fields
											// TODO: improve recursiveness code
											let random = Math.random();
											return (<div key={random}>{key}: {val}</div>);
										}))}
									</CardBody>
								</CardHeader>);
							}));
						}))
						}
					</div>
				</Card>
				}
			</>
		);
	}
}