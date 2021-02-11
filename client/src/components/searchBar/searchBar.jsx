import { React } from 'react';
import { Input } from 'antd';
import './searchBar.css';

const SearchBar = ({handleChange, input}) => {

	return (
		<div className='ui-widget'>
			<Input
				id="search-bar"
				placeholder='search'
				value={input}
				enterButton="Search"
				size="large"
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchBar;
