import React from 'react';
import { TextField, Dropdown, DropdownItem } from 'nr1';


const SetToken = props => {
	let { githubToken, setGithubToken } = props;

	const handleChange = e => {
		githubToken = e.target.value;
	};

	const handleClick = index => {
		setGithubToken(githubToken,index);
	};

	const quantities = new Array(10).fill().map((_, i) => `${i*10} repositories`);
	// TODO: remove 0 from the array values
	// TODO: scss isn't appearing?
	const items = [ ...quantities ];
	const actionDropdown = (
		<Dropdown style={{ marginTop:'-20px' }} spacingType={[ Dropdown.SPACING_TYPE.EXTRA_LARGE ]} title="Select a dataset" items={items}>
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