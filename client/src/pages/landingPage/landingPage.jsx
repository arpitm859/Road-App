import { React } from 'react';
import { Carousel } from "antd";
import image1 from './Road1.jpg';
import image2 from './Road2.jpg';
import image3 from './Road3.jpg';
import image4 from './Road4.jpg';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect} from 'react';
import axios from 'axios';

const LandingPage = () => {

	let solved = 0;
	let  ongoing = 0;
	let registered = 0;
	const [datapoints ,setDataPoints]= useState([]);

	useEffect( async () => {
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		};
		await axios.get('/complaints/all',config).then((json) => {
			console.log(json.data);
			json.data.map((complaint) => {
				if(complaint.status===0){
					registered+=1
				}
				else if(complaint.resolved===true){
					solved+=1
				}
				else if(complaint.status>0 && complaint.status<11){
					ongoing+=1
				}
			})
			setDataPoints([solved,ongoing,registered]);
		})
	},[]);

	const carouselStyle = {
		height: '100%',
		width:'100% '
	}

	const data = {
		labels : ['Solved','In Progress', 'Registered'],
		datasets: [{
			label:"Analysis of Complaints",
			data: datapoints,
			backgroundColor: [
				'#82BC6A',
				'#1DCBCD',
				'#D96489'
			]
		}],
	}
	console.log(datapoints);
	console.log(data.datasets[0].data);

	const pieOptions = {
		maintainAspectRatio: false,
		legend: {
			labels: {
				fontSize:16
			}
		}
	}

	return (
		<div className="flex-container">
			<div className="flex-child">
				<Carousel autoplay  style={{width:'50%', height:'100%',marginTop:'8rem',marginLeft:'2.5rem'}}>
					<div>
						<img style={carouselStyle} src={image1} alt="image 1" />
					</div>
					<div>
						<img style={carouselStyle} src={image2} alt="image2" />
					</div>
					<div>
						<img style={carouselStyle} src={image3} alt="image3" />
					</div>
					<div>
						<img style={carouselStyle} src={image4} alt="image4" />
					</div>
				</Carousel>
			</div>
				<div className="flex-child">
					<Pie
						data={data}
						options = {pieOptions}
						width = {500}
						height = {300}
					/>
				</div>
		</div>
	);
};

export default LandingPage;
