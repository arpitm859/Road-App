import { React, useState, useEffect } from 'react';
import './existingComplaints.css';
import axios from 'axios';
import ComplainCard from '../../components/complainCard/complainCard';
import { Pagination } from 'antd';
import SearchBar from '../../components/searchBar/searchBar';

const ExistingComplaints = () => {
	let id = '';
	const [data, setData] = useState([]);
	const filtered = [];

	useEffect( async () => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		await axios.get('/complaints/all', config).then((json) => {
			console.log(json);
			console.log(json.data);
			json.data.map((complaint) => {
				if(complaint.status!==11){
					filtered.push(complaint)
				}
			})
			console.log(filtered);
			setData(filtered);
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
						description={complaint.description}
						address={complaint.complaint_address}
						city={complaint.complaint_city}
						onSubmit={onSubmit}
						upvotes={complaint.backer}
					/>
				</>
			);
		});
	};
	return (
		<div className='complainDiv'>
			<SearchBar />
			{renderCards()}
		</div>
	);
};

export default ExistingComplaints;
