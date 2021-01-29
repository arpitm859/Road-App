import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import './myComplaints.css';
import '../../components/complainCard/complainCard';
import ComplainCard from '../../components/complainCard/complainCard';

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
			id = complaint.id;
			return (
				<>
					<ComplainCard
						date={complaint.createdAt.substring(0, 10)}
						title={complaint.title}
						id={id}
						address={complaint.complaint_address}
						city={complaint.complaint_city}
					/>
					{/*<tr>
					<td>{complaint.createdAt.substring(0, 10)}</td>
					<td>
						<Link to={`/status/${id}`} style={{ color: 'white' }}>
							{complaint.title}
						</Link>
					</td>
					<td>{complaint.complaint_address}</td>
					<td>{complaint.complaint_city}</td>
					<td>{complaint.backer.length}</td>
				</tr>*/}
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