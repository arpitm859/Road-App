import { React } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './image1.jpg';
import image2 from './image2.jpg';

const LandingPage = () => {
	return (
		<div style={{ height: '100vh' }}>
			<div className='images-card'>
				<Carousel>
					<Carousel.Item interval={1000}>
						<img src={image2} alt='Image1' className='d-block w-100 images' />
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img src={image1} alt='Image2' className='d-block w-100 images' />
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default LandingPage;
