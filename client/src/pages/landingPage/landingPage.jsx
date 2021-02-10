import { React } from 'react';
import { Carousel } from 'antd';
import image1 from './Road1.jpg';
import image2 from './Road2.jpg';
import image3 from './Road3.jpg';
import image4 from './Road4.jpg';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './landingPage.css';

const LandingPage = () => {

	let solved = 0;
	let ongoing = 0;
	let registered = 0;
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
					setEComplaints([...eComplaints,complaint])
				} else if (complaint.status > 0 && complaint.status < 11) {
					ongoing += 1;
				}
			});
			setDataPoints([solved, ongoing, registered]);
			
		});
	}, []);

	const carouselStyle = {
		height: '100%',
		width: '100% ',
	};

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
		try{
			return eComplaints.map((complaint) => {
				return(
					<div>
						<h4>Resolved {complaint.title} at {complaint.complaint_street}</h4>
					</div>
				)
			})
		}catch(err){
			console.log(err);
		}
	}

	return (
		<div className='layout'>
			<div className="carousel">
				<Carousel
					autoplay
					style={{
						width: '50vw',
						height: '50vh',
						// marginTop: '5rem',
						marginLeft: '2.5rem',
					}}
				>
					<div>
						<img style={carouselStyle} src={image1} alt='image 1' />
					</div>
					<div>
						<img style={carouselStyle} src={image2} alt='image2' />
					</div>
					<div>
						<img style={carouselStyle} src={image3} alt='image3' />
					</div>
					<div>
						<img style={carouselStyle} src={image4} alt='image4' />
					</div>
				</Carousel>
			</div>
			<div className="rollingSections">
				<div className="rollingComplaint">
					{showComplaints()}
				</div>
				<div className='chartContainer'>
					<Pie data={data} options={pieOptions} width={500} height={300} />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
