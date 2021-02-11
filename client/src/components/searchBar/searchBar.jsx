import { React, useState } from 'react';
import { Input, Space } from 'antd';
import './searchBar.css';

const SearchBar = () => {

	const [input, setinput] = useState();
	const [complain, setComplain] = useState({});
	const handleSourceCitySelect = async (value) => {
		let data = await fetch(`http://localhost:5000/search/${value.target.value}`);
		console.log(value.target.value)
		data.json().then((result) => {
			setComplain(result[0]);
			console.log(result[0]);
		});
	};

	return (
		<div className='ui-widget'>
			<Input
				id="search-bar"
				placeholder='search'
				value={input}
				enterButton="Search"
				size="large"
				onChange={(value) => handleSourceCitySelect(value)}
			/>
		</div>
	);
};

export default SearchBar;
