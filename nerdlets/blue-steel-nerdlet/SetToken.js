import React, {useState} from 'react';
import { TextField,Button } from 'nr1';

const SetToken = props => {
	let {githubToken, setGithubToken, getRepoData} = props
	console.log('githubToken: ', githubToken);

	const handleChange = e => {
		githubToken = e.target.value
	}
	return (
		<div>
			{!githubToken && <div>
				<TextField
					autofocus
					label="GitHub Token"
					placeholder='paste your Github personal access token here'
					onChange={e => handleChange(e)}
				/>
				<Button
					onClick={() => setGithubToken(githubToken)}
					type="primary"
				>
              Set Your GitHub Token
				</Button></div>
			}
		</div>
	);
};

export default SetToken;