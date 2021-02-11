import { React, useState, useEffect } from 'react';
import axios from 'axios';
import ComplainCard from '../../components/complainCard/complainCard';

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

	const renderCards = () => {
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
				window.location.reload();
			} catch (err) {
				console.error(err.response.data);
			}
		};

		return data.map((complaint) => {
			id = complaint._id;
			return (
				<div>
					<>
						<ComplainCard
							date={complaint.createdAt.substring(0, 10)}
							title={complaint.title}
							id={id}
							description={complaint.description}
							address={complaint.complaint_address}
							city={complaint.complaint_city}
							onSubmit={onSubmit}
							upvotes={complaint.backer}
						>Status</ComplainCard>
					</>
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
						{complaint.status}{' '}
						<i
							className='arrow up'
							onClick={() => {
								onSubmit(complaint._id);
							}}
						></i>
					</td>
						</tr>*/}
				</div>
			);
		});
	};
	return (
		<div style={{ height: '100vh'}}>
			{renderCards()}
		</div>
	);
};

export default IssuesAssigned;