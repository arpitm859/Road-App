import { React, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const IssuesAssigned = () => {
	const [data, setData] = useState([]);
	let id = '';
	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		
		axios.get('/issues', config).then((json) => {
			setData(json.data);
		});
	}, []);

	const renderTable = () => {
		const onSubmit = async (_id) => {
			try {
				const config = {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					},
				};
				const res = await axios.post(
					'/issues/resolve',
					{
						issue_id: _id,
					},
					config
				);
				console.log(res);
				window.location.reload();
			} catch (err) {
				console.error(err.response.data);
			}
		};

		return data.map((complaint) => {
			id = complaint._id;
			return (
				<tr>
					<td>{complaint.createdAt.substring(0, 10)}</td>
					<td>
						<Link to={`/status/${id}`} style={{ color: 'white' }}>
							{complaint.title}
						</Link>
					</td>
					<td>{complaint.description}</td>
					<td>{complaint.complaint_address}</td>
					<td>
						{complaint.status}{' '}
						<i
							className='arrow up'
							onClick={() => {
								onSubmit(complaint._id);
							}}
						></i>
					</td>
				</tr>
			);
		});
	};
	return (
		<div style={{ height: '100vh'}}>
			<div id='complaint-card'>
				<Table
					responsive='sm'
					style={{ marginTop: '2rem', color: 'white' }}
					id='existing-complaints'
				>
					<thead>
						<tr>
							<th>Date of the Complaint</th>
							<th>Title</th>
							<th>Description of the Complaint</th>
							<th>Address of the Complaint</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>{renderTable()}</tbody>
				</Table>
			</div>
		</div>
	);
};

export default IssuesAssigned;
