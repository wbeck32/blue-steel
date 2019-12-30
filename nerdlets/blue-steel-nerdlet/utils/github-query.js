const fetch = require(`cross-fetch`);

const apiUrl = `https://api.github.com/graphql`;

export default function query(
	url = apiUrl,
	data = {
		query: `query {  viewer {   login }}`,
		variables: null
	}
) {
	return fetch(
		url, {
			method: `POST`,
			mode: `cors`,
			cache: `no-cache`,
			headers: {
				'Content-Type': `application/json`,
				Authorization: `token `
			},
			body: JSON.stringify(data)
		}
	)
		.then(val => val.json())
		.then(f => f);
}
