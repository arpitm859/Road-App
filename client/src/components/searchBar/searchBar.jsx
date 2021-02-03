import { React, useState } from 'react';
import JqueryReactAutocomplete from 'jquery-react-autocomplete';
import { axios } from 'axios';

const SearchBar = () => {
    const [complain, setComplain] = useState({});
	const handleSourceCitySelect = async(value) => {
		axios.get(`/search/${value.label}`).then((json) => console.log(json));
        // let data = await axios.get(`http://localhost:5000/search/${value.label}`)
		// setComplain(value);
		// console.log(data.data);
	};

	return (
		<div className='ui-widget'>
			<label for='recipe'></label>
			<JqueryReactAutocomplete
				inputProps={{
					id: 'sourceCity',
					label: 'City: ',
					value: complain.label || '',
				}}
				onSourceSelect={handleSourceCitySelect}
			/>
		</div>
	);
};

export default SearchBar;
