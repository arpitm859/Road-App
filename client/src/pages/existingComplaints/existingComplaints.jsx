import { React, useState, useEffect } from 'react';
import './existingComplaints.css';
import axios from 'axios';
import ComplainCard from '../../components/complainCard/complainCard';
import SearchBar from '../../components/searchBar/searchBar';

const ExistingComplaints = () => {
	let id = '';
	const [data, setData] = useState([]);
	const filtered = [];
	const [input, setinput] = useState();
	const [complain, setComplain] = useState();
	const handleSource = async (value) => {
		let data = await fetch(`http://localhost:5000/search/${value.target.value}`);
		console.log(value.target.value);
		data.json().then((result) => {
			setComplain(result);
			console.log(complain);
		});
	};
	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios.get('/complaints/all', config).then((json) => {
			json.data.map((complaint) => {
				if (complaint.status !== 11) {
					filtered.push(complaint);
				}
			});
			setData(filtered);
		});
	}, []);
	const getDate = (at) => {
		try {
			const date = at.substring(0, 10);
			return date;
		} catch (err) {
			return '';
		}
	};

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
		try {
			if (complain) {
				return complain.map((complaint) => {
					id = complaint._id;
					return (
						<>
							<ComplainCard
								date={getDate(complaint.createdAt)}
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
			} else {
				return data.map((complaint) => {
					id = complaint._id;

					return (
						<>
							<ComplainCard
								date={getDate(complaint.createdAt)}
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
			}
		} catch (err) {
			return '';
		}
	};
	return (
		<div className='complainDiv'>
			<SearchBar handleChange={(value) => handleSource(value)} input={input} />
			{renderCards()}
		</div>
	);
};

export default ExistingComplaints;
