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
			variables:  { "number_of_repos":5 }
		});
	}

	render() {
		const { repoData } = this.props;
		console.log('repoData: ', repoData);

		function traverse(x) {
			if (isArray(x)) {
				traverseArray(x);
			} else if ((typeof x === 'object') && (x !== null)) {
				traverseObject(x);
			} else {
			}
		}

		function traverseArray(arr) {
			arr.forEach(function (x) {
				traverse(x);
			});
		}

		function traverseObject(obj) {

			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					traverse(obj[key]);
				}
			}
		}

		function isArray(o) {
			return Object.prototype.toString.call(o) === '[object Array]';
		}
		return(<div>
			{repoData.data &&
	<>
		{Object.entries(repoData).map(m=>{
			traverse(m);
		})
		}
	</>
			}

		</div>


		);


		// return <SimpleRecurse n={5}/>;
	}
}


// {Object.values(repoData).map(m=>{
// 	if (isArray(m)) {
// 		console.log('array: ',m);
// 		traverseArray(m);
// 	} else if ((typeof m === 'object') && (m !== null)) {
// 		console.log('object: ',m);
// 		traverseObject(m);
// 	} else {
// 		console.log('end');
// 	}
// 	let random = Math.random();
// 	return <div key={random}>1</div>;

// })}