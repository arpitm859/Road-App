import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './status.css';
import ProgressCard from '../../components/progressCard/progressCard';
import DescriptionCard from '../../components/descriptionCard/descriptionCard'


const Status = (props) => {
	const [data, setData] = useState({});
	const [status, setStatus] = useState(0);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios
			.get(`/complaints/${props.match.params.id}`, config)
			.then((json) => {setData(json.data);console.log(json.data)});
		axios.get(`/status/${props.match.params.id}`, config).then((json) => {
			setStatus(json.data);
		});
	}, []);

	return (
		<div className='status'>
			<div className='progress-div'>
				<ProgressCard status={status} />
			</div>
			<div className='description-div'>
				<div className='ress-div'>
					<DescriptionCard
						by={data.complainant}
						date={data.createdAt}
						title={data.title}
						address={data.complainant_address}
						description={data.description}
					/>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.560539360676!2d80.98310177197504!3d26.867893997020815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzA0LjQiTiA4MMKwNTknMDIuNSJF!5e0!3m2!1sen!2sin!4v1612196761979!5m2!1sen!2sin'
						width='900'
						height='450'
						frameborder='0'
						allowfullscreen=''
						aria-hidden='false'
						tabindex='0'
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Status;
