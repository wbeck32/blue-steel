import React from 'react';
import { TextField, Button, Dropdown, DropdownItem } from 'nr1';

const SetToken = props => {
	let { githubToken, setGithubToken } = props;

	const handleChange = e => {
		githubToken = e.target.value;
	};

	const handleClick = index => {
		setGithubToken('ae67fdb6ed1f22a9f93f850a56be28757181f959',index);
	};

	const quantities = new Array(10).fill().map((_, i) => `${i*10} repositories`);
	const items = [ 'Security vulnerabilities', ...quantities ];
	const actionDropdown = (
		<Dropdown spacingType={[ Dropdown.SPACING_TYPE.EXTRA_LARGE ]} title="Select a dataset" items={items}>
			{({ item, index }) => (
				<DropdownItem key={index} value={index} onClick={item => handleClick({ index })}>
					{item}
				</DropdownItem>
			)}
		</Dropdown>
	);
	return (
		<div>
			{!githubToken && <div>
				<TextField
					autofocus
					spacingType={[ TextField.SPACING_TYPE.EXTRA_LARGE ]}
					label="GitHub Token"
					placeholder='Paste your Github personal access token here and then select a dataset'
					onChange={e => handleChange(e)}
				/>
				{actionDropdown}
			</div>
			}
		</div>
	);
};

export default SetToken;