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
			query:queries[3],
			variables:  null
		});
	}

	render() {
		const { repoData } = this.props;

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
					console.log('key: ', key, obj[key]);
					traverse(obj[key]);
				}
			}
		}

		function isArray(o) {
			return Object.prototype.toString.call(o) === '[object Array]';
		}

		// usage:
		traverse(repoData);
		return(
			<div>{repoData.data &&
				<div>
wha
				</div>
			}

			</div>
		);
	}
}