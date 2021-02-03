import { React, useState } from 'react';
import JqueryReactAutocomplete from 'jquery-react-autocomplete';
import { axios } from 'axios';

const SearchBar = () => {
	const [input, setinput] = useState({});
	const [complain, setComplain] = useState({});
	const handleSourceCitySelect = async(value) => {
        let data = await fetch(`http://localhost:5000/search/${value.label}`)
		setinput(value);
		data.json().then((result) => {
			console.log(result[0])
			setComplain(result[0]);
			console.log(complain)
		})
	};
    
	return (
		<div className='ui-widget'>
			<label for='recipe'></label>
			<JqueryReactAutocomplete
				inputProps={{
					id: 'sourceCity',
					label: 'City: ',
					value: input.label || '',
				}}
				onSourceSelect={handleSourceCitySelect}
			/>
		</div>
	);
};

export default SearchBar;
