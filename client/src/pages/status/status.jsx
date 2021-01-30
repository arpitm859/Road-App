import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './status.css';
import ProgressCard from '../../components/progressCard/progressCard';


const Status = (props) => {
	const [data, setData] = useState([]);
	const [status, setStatus] = useState(0);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios
			.get(`/complaints/${props.match.params.id}`, config)
			.then((json) => setData(json.data));
		axios.get(`/status/${props.match.params.id}`, config).then((json) => {
			setStatus(json.data);
		});
	}, []);

	return (
		<div className='status'>
			<div className='progress-div'>
				<ProgressCard status={status} />
			</div>
		</div>
	);
};

export default Status;
