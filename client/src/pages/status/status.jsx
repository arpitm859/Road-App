import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './status.css';
import { Timeline } from 'antd';
import { Steps } from 'antd';
import './status.css'
const { Step } = Steps;

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
			setStatus(json.data);
		});
	}, []);

	const check = (currentStatus, progress) => {
		if (currentStatus > progress + 1) {
			return 'Waiting';
		} else if (currentStatus < progress + 1) {
			return 'Finished';
		} else {
			return 'In Progress';
		}
	};

	return (
		<div className='status'>
			<div className='status-div'>
				<h1>Complain Status</h1>
				<Steps
					direction='vertical'
					current={status}
					style={{ marginTop: '3rem', marginLeft: '2rem' }}
				>
					<Step title={check(1, status)} description='Complaint Acknowledged.' />
					<Step
						title={check(2, status)}
						description='Investigation handed to Agency.'
					/>
					<Step
						title={check(3, status)}
						description='Agency Investigation Completed.'
					/>
					<Step title={check(4, status)} description='Problem identified.' />
					<Step
						title={check(5, status)}
						description='Funds and requirements asked from Government.'
					/>
					<Step
						title={check(6, status)}
						description='Funds transferred to agency.'
					/>
					<Step title={check(7, status)} description='Agency working on location.' />
					<Step title={check(8, status)} description='Issue resolved from agency.' />
					<Step title={check(9, status)} description='Approval from government.' />
					<Step title={check(10, status)} description='Issure resolved.' />
				</Steps>
			</div>
		</div>
	);
};

export default Status;
