import React, {useState} from 'react';
import { TextField,Button, StackItem, Stack } from 'nr1';
import PropTypes from 'prop-types';

const Setup = props => {
	let {githubToken, setGithubToken} = props
	console.log('githubToken: ', githubToken);

	const handleChange = e =>{
		console.log('e: ', e.target.value);
		githubToken = e.target.value
		console.log('handling it')
	}

	return (
		<div>
		  <Stack alignmentType="center">
				<StackItem grow>
					<TextField
						autofocus
						label="GitHub Token"
						placeholder="Paste your user token here"
						onChange={e=>handleChange(e)}
					/>
				</StackItem>
				<StackItem>
					<Button
						onClick={() => setGithubToken(githubToken)}
						// disabled={!githubToken || githubToken.length !== 4}
						type="primary"
					>
              Set Your GitHub Token
					</Button>
				</StackItem>
			</Stack>
		</div>
	);
};

export default Setup;