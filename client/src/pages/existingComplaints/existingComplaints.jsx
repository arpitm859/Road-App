import { React, useState, useEffect } from 'react';
import './existingComplaints.css';
import { Navbar, Nav, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ComplainCard from '../../components/complainCard/complainCard';

const ExistingComplaints = () => {
	let id = '';
	const [data, setData] = useState([]);
	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios.get('/complaints/all', config).then((json) => setData(json.data));
	}, []);
	const renderCards = () => {
		const onSubmit = async (_id) => {
			try {
				const config = {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					},
				};
				const res = await axios.post(
					'/complaints/upvote',
					{
						complaint_id: _id,
					},
					config
				);
				window.location.reload();
			} catch (err) {
				console.error(err.response.data);
			}
		};
		return data.map((complaint) => {
			id = complaint._id;
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
					<td>{complaint.description}</td>
					<td>{complaint.complaint_address}</td>
					<td>
						{complaint.backer.length}{' '}
						<i
							className='arrow up'
							onClick={() => {
								onSubmit(complaint._id);
							}}
						></i>
					</td>
						</tr>*/}
				</>
			);
		});
	};
	return <div className='complainDiv'>{renderCards()}</div>;
};

export default ExistingComplaints;
