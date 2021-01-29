import { React, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import './status.css';

const Status = (props) => {
	const [data, setData] = useState([]);
	const [status, setStatus] = useState(0);

	console.log();
	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios.get('/complaints/all', config).then((json) => setData(json.data));
		axios.get(`/status/${props.match.params.id}`, config).then((json) => {
			setData(json.data);
			setStatus(json.data);
		});
	}, []);

	return (
		<div style={{ height: '100vh', backgroundColor: 'rgb(0, 0, 0, 0.9)' }}>
			<div className='table-card'>
				<Table
					responsive='sm'
					style={{ marginTop: '5rem', color: 'white' }}
					id='existing-complaints'
				>
					<tbody>
						<tr>
							<td
								style={{
									backgroundColor: 1 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								1. Complaint Acknowledged
							</td>
							<td
								style={{
									backgroundColor: 2 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								2. Investigation handed to Agency
							</td>
						</tr>
						<tr>
							<td
								style={{
									backgroundColor: 3 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								3. Agency Investigation Completed
							</td>
							<td
								style={{
									backgroundColor: 4 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								4. Problem identified
							</td>
						</tr>
						<tr>
							<td
								style={{
									backgroundColor: 5 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								5. Funds and requirements asked from Government
							</td>
							<td
								style={{
									backgroundColor: 6 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								{' '}
								6. Funds transferred to agency
							</td>
						</tr>
						<tr>
							<td
								style={{
									backgroundColor: 7 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								7. Agency working on location
							</td>
							<td
								style={{
									backgroundColor: 8 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								8. Issue resolved from agency
							</td>
						</tr>
						<tr>
							<td
								style={{
									backgroundColor: 9 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								9. Approval from government
							</td>
							<td
								style={{
									backgroundColor: 10 <= status ? 'green' : 'rgb(0, 0, 0, 0.8)',
									padding: '2.5rem',
								}}
							>
								10. Issure resolved
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default Status;
