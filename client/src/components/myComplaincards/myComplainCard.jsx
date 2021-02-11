import { React, useState, useEffect } from 'react';
import { Progress, Card } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyComplainCard = ({ date, title, id, address, city }) => {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios.get(`/status/${id}`, config).then((json) => {
			setProgress(json.data * 10);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='complain-card'>
			<Card id='card' title={title} bordered={true}>
				<Link to={`/status/${id}`}>
					<div>
						<p className='lable'>Date : {date}</p>
						<p className='lable'>Address : {address}</p>
						<p className='lable'>City : {city}</p>
					</div>
				</Link>
				<Progress percent={progress} status={progress < 100 ? 'active' : ''} />
			</Card>
		</div>
	);
};

export default MyComplainCard;
