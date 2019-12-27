import React, { Component } from 'react';
import { NerdGraphQuery } from 'nr1';
import UserStorage from '../components/UserStorage'
import { BlockText } from 'nr1'



// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class BlueSteelNerdlet extends Component {
	constructor(props) {
		super(props);
		this.accountId = 2571185;

		this.state = {
			appId: "blue-steel-nerdlet",
			appName: "blue-steel",
		};
		console.debug("Nerdlet constructor", this); //eslint-disable-line
	}


	render() {
		return (
			<div className="container">
				<UserStorage />

				Hello I am dead.
                <NerdGraphQuery query={`{actor {user {id name email}}}`}>
					{({ loading, error, data }) => {
						console.debug([loading, data, error]); //eslint-disable-line


						<BlockText spacingType={[BlockText.SPACING_TYPE.MEDIUM]}>
							<div>Yello!
									{data}
							</div>
						</BlockText>
						return null
					}}
				</NerdGraphQuery>
			</div>
		)
	}
}
