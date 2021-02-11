import { React } from 'react';
// import { Carousel } from 'antd';
import image1 from './Road1.jpg';
import image2 from './Road2.jpg';
import image3 from './Road3.jpg';
import image4 from './Road4.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './landingPage.css';

const LandingPage = () => {
	let solved = 0;
	let ongoing = 0;
	let registered = 0;
	let comp = [];
	const [datapoints, setDataPoints] = useState([]);
	const [eComplaints, setEComplaints] = useState([]);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		axios.get('/complaints/all', config).then((json) => {
			json.data.map((complaint) => {
				if (complaint.status === 0) {
					registered += 1;
				} else if (complaint.resolved === true || complaint.status === 11) {
					solved += 1;
					comp.push(complaint);
				} else if (complaint.status > 0 && complaint.status < 11) {
					ongoing += 1;
				}
			});
			setDataPoints([solved, ongoing, registered]);
			setEComplaints(comp);
		});
	}, []);

	const data = {
		labels: ['Solved', 'In Progress', 'Registered'],
		datasets: [
			{
				label: 'Analysis of Complaints',
				data: datapoints,
				backgroundColor: ['#82BC6A', '#1DCBCD', '#D96489'],
			},
		],
	};

	const pieOptions = {
		maintainAspectRatio: false,
		legend: {
			labels: {
				fontSize: 16,
			},
		},
	};

	const showComplaints = () => {
		try {
			return eComplaints.map((complaint) => (
				<h5 key={complaint.title}>{complaint.title}</h5>
			));
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='layout'>
			<div className='carousel'>
				<Carousel id='landing-carousel'>
					<Carousel.Item interval={1000}>
						<img className='d-block w-100' src={image1} alt='First slide' />
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={image2} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={image3} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={image4} alt='Third slide' />
					</Carousel.Item>
				</Carousel>
			</div>
			<div className='rollingSections'>
				<div className='rollingComplaint'>{showComplaints()}</div>
				<div className='chartContainer'>
					<Pie data={data} options={pieOptions} width={500} height={300} />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
