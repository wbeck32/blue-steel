import React, {useState} from 'react';
import { TextField,Button, StackItem, Stack } from 'nr1';
import PropTypes from 'prop-types';

const Setup = props => {
	let {githubToken, setGithubToken, retrieveGithubToken} = props
	console.log('githubToken, retrieveGithubToken: ', githubToken, retrieveGithubToken);

	const handleChange = e => {
		githubToken = e.target.value
	}
	return (
		<div>
		  <Stack alignmentType="center">
				{!githubToken &&
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
				{githubToken && <StackItem>
					<Button
						onClick={() => retrieveGithubToken()}
						type="primary"
					>
              retrieve GitHub Token
					</Button>
				</StackItem>}
			</Stack>
		</div>
	);
};

export default Setup;