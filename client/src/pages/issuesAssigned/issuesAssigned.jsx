import { React, useState, useEffect } from 'react';
import axios from 'axios';
import MyComplainCard from '../../components/myComplaincards/myComplainCard';

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

		return data.map((complaint) => {
			id = complaint._id;
			const getDate = () => {
				try {
					const date = complaint.createdAt.substring(0, 10);
					return date;
				} catch (err) {
					return '';
				}
			};
			return (
				<div>
					<>
						<MyComplainCard
							date={getDate()}
							title={complaint.title}
							id={id}
							description={complaint.description}
							address={complaint.complaint_address}
							city={complaint.complaint_city}
						>
							Status
						</MyComplainCard>
					</>
				</div>
			);
		});
	};
	return <div className='complainDiv'>{renderCards()}</div>;
};

export default IssuesAssigned;
