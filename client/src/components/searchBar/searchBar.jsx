import { React, useState } from 'react';
import JqueryReactAutocomplete from 'jquery-react-autocomplete';

const SearchBar = () => {
    const [complain, setComplain] = useState({});
	const handleSourceCitySelect = async(value) => {
        let data = await fetch(`http://localhost:5000/search/${value.label}`)
        data.json()
		setComplain(value);
		console.log(data);
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
