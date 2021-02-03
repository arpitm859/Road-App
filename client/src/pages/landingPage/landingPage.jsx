import { React } from 'react';
import { Carousel } from "antd";
import image1 from './Road1.jpg';
import image2 from './Road2.jpg';
import image3 from './Road3.jpg';
import image4 from './Road4.jpg';
import {Pie} from 'react-chartjs-2';

const LandingPage = () => {

	const carouselStyle = {
		height: '100%',
		width:'100% '
	}
	
	const styles = {
		pieChart : {
			height:'300px',
			width: '500px'
		}
	}

	const pieOptions = {

	}

	return (
		<div className="mainCard">
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
				<div style={styles.pieChart}>
					<Pie
						// data={data}
						options = {pieOptions}
					/>
				</div>
		</div>
	);
};

export default LandingPage;
