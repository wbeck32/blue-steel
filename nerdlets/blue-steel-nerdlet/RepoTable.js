import React, {Component} from 'react';
import {Grid,GridItem, BlockText, Stack, StackItem} from 'nr1'
import queries from './queries'
import ReactTable from 'react-table';


export default class RepoTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			githubToken: props.githubToken || null,
			repoData: props.repoData || []
		}
	}

	componentDidMount() {
		const {getRepoData} = this.props
		return getRepoData(`https://api.github.com/graphql`, {query:queries[0]})
	}

	render() {
		const {repoData} = this.props
		return(
			<div>

				{repoData.data &&
					<Grid>
						{repoData.data.viewer.repositories.nodes.map(n=>{
							return(
								<>
									<GridItem key={`id-${n.createdAt}`} columnSpan={2}>
										<BlockText>
											{n.name}
										</BlockText>
									</GridItem>
									<GridItem key={`id-${n.createdAt}`} columnSpan={2}>
										<BlockText>{n.createdAt}</BlockText>
									</GridItem>
								</>
							)
						})}
					</Grid>


				}
			</div>
		)
	}
}