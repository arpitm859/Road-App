import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './status.css';
import ProgressCard from '../../components/progressCard/progressCard';
import DescriptionCard from '../../components/descriptionCard/descriptionCard';

const Status = (props) => {
	const [data, setData] = useState([]);
	const [status, setStatus] = useState(0);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios.get(`/complaints/${props.match.params.id}`, config).then((json) => {
			setData(json.data);
		});
		axios.get(`/status/${props.match.params.id}`, config).then((json) => {
			setStatus(json.data);
		});
	}, []);
	const getDate = () => {
		try{
			const date = data.createdAt.substring(0, 10)
			return date
		}catch(err){
			return ''
		}
	}
	return (
		<div className='status'>
			<div className='progress-div'>
				<ProgressCard status={status} />
			</div>
			<div className='description-div'>
				<div className='ress-div'>
					<DescriptionCard
						by={data.complainant}
						date={getDate()}
						title={data.title}
						address={data.complainant_address}
						description={data.description}
						url={data.image}
					/>
					<iframe
						src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDdKd_hcdItqfkNDHWd7IQQD-UjML8yXEI&q=${data.lat},${data.long}`}
						width='730'
						height='450'
						frameborder='1'
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
