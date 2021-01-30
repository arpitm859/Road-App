import { React, useState, useEffect } from 'react';
import { Progress, Card } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import { CaretUpOutlined } from '@ant-design/icons';
import './complainCard.css'

const ComplainCard = ({ date, title, id, address, city, onSubmit, upvotes }) => {
	const [progress, setProgress] = useState(0);
	useEffect((id) => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios.get(`/status/${id}`, config).then((json) => {
			setProgress(json.data*10);
		});
	}, []);
	return (
		<div className='complain-card'>
			<Link to={`/status/${id}` } >
				<Card
					id = 'card'
					title={title}
					bordered={true}
				>
					<p>Date : {date}</p>
					<p>Address : {address}</p>
					<p>City : {city}</p>
					<Progress percent={progress} status='active' />
					<Button
						type='primary'
						shape='round'
						icon={<CaretUpOutlined />}
						onClick={() => onSubmit(id)}
					/>
				</Card>
			</Link>
		</div>
	);
};

export default ComplainCard;
