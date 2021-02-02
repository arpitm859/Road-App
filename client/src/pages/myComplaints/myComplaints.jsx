import { React, useState, useEffect } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import './myComplaints.css';
import '../../components/complainCard/complainCard';
import MyComplainCard from '../../components/myComplaincards/myComplainCard';

const MyComplaints = () => {
	const [data, setData] = useState([]);
	let id = '';
	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios.get('/complaints', config).then((json) => {
			setData(json.data);
			console.log(json);
		});
	}, []);
	const renderCards = () => {
		return data.map((complaint) => {
			
			console.log(complaint)
			return (
				<>
					<MyComplainCard
						date={complaint.createdAt.substring(0, 10)}
						title={complaint.title}
						id={id}
						address={complaint.complaint_address}
						city={complaint.complaint_city}
					/>
				</>
			);
		});
	};
	return (
		<div className='complainDiv'>
			{renderCards()}
		</div>
	);
};

export default MyComplaints;
