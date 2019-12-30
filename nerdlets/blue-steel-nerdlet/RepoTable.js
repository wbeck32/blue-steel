import React from 'react'
import { StackItem, Button } from 'nr1'
const fetch = require(`cross-fetch`);
const apiUrl = `https://api.github.com/graphql`;

const RepoTable = props => {
	console.log('props: ', props);


	const query = (
		apiUrl,
		data = {
			query: `query {  viewer { login }}`,
			variables: null
		}
	) => {
		return fetch(apiUrl, {
			method: `POST`,
			mode: `cors`,
			cache: `no-cache`,
			headers: {
				"Content-Type": `application/json`,
				Authorization: `token process.env.GITHUB_PERSONAL_TOKEN`
			},
			body: JSON.stringify(data)
		})
				.then(val => val.json())
				.then(f => f);
	};
	return (<div>
		<StackItem>

		</StackItem>
	</div>)

}

export default RepoTable;
