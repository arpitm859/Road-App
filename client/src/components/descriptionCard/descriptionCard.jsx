import { React, useState } from 'react';
import { Card } from 'antd';
import './descriptionCard.css';
import { Image } from 'antd';

const DescriptionCard = ({ by, date, title, decription, address, url }) => {

	const isImage = (url) => {		
		if(typeof url!=='undefined') {
			return(	
				<div className='desc-image'>
					<Image width={250} src={url} />						
				</div>
			)
		}
	}

	return (
		<div>
			<Card id='dcard' >
				<div className='description'>
					{isImage(url)}
					<div className='desc'>
						<div className='info'>
							<span className='props'>Complainant Name: </span>
							<span className='prop'>{by}</span>
						</div>
						<div className='info'>
							<span className='props'>Title: </span>
							<span className='prop'>{title}</span>
						</div>
						<div className='info'>
							<span className='props'>Description: </span>
							<span className='prop'>{decription}</span>
						</div>
						<div className='info'>
							<span className='props'>Address: </span>
							<span className='prop'>{address}</span>
						</div>
						<div className='info'>
							<span className='props'>Dated: </span>
							<span className='prop'>{date}</span>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default DescriptionCard;
