import { React, useState, useEffect } from 'react';
import { Progress, Card } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import { CaretUpOutlined } from '@ant-design/icons';
import './complainCard.css';

const ComplainCard = ({
	date,
	title,
	id,
	address,
	city,
	onSubmit,
	upvotes,
}) => {
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
				<Button
					type={upvotes.includes(localStorage.getItem('userID')) ? 'primary' : ''}
					shape='round'
					icon={<CaretUpOutlined />}
					onClick={() => onSubmit(id)}
				>Upvote</Button>
				<p>{upvotes.length}</p>
			</Card>
		</div>
	);
};

export default ComplainCard;
