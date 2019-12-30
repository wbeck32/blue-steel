import React, {useState} from 'react';
import { TextField,Button, StackItem, Stack } from 'nr1';
import PropTypes from 'prop-types';

const Setup = props => {
	let {githubToken, isTokenSet,setGithubToken, retrieveGithubToken} = props
	console.log('githubToken: ', githubToken,isTokenSet);

	const handleChange = e => {
		githubToken = e.target.value
	}
	return (
		<div>
			{!isTokenSet &&
				<div>
					<StackItem grow>
						<TextField
							autofocus
							label="GitHub Token"
							placeholder="Paste your user token here"
							onChange={e => handleChange(e)}
						/>
					</StackItem>
					<StackItem>
						<Button
							onClick={() => setGithubToken(githubToken)}
							type="primary"
						>
              Set Your GitHub Token
						</Button>
					</StackItem>
				</div>
			}
			{isTokenSet && githubToken && <StackItem>
				<Button
					onClick={() => retrieveGithubToken()}
					type="primary"
				>
              retrieve GitHub Token
				</Button>
			</StackItem>}
		</div>
	);
};

export default Setup;