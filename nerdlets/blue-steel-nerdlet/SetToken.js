import React, {useState} from 'react';
import { TextField,Button, StackItem, Stack } from 'nr1';
import PropTypes from 'prop-types';

const SetToken = props => {
	let {githubToken, setGithubToken} = props

	const handleChange = e => {
		githubToken = e.target.value
	}
	return (
		<div>
			{!githubToken && <div>
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
			</div>}
		</div>
	);
};

export default SetToken;