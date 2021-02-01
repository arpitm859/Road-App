import { React, useState, useEffect } from 'react';
import { Steps, Card } from 'antd';
import './descriptionCard.css';
const { Step } = Steps;

const DescriptionCard = ({by, date, title, decription, address}) => {
	return (
		<div>
			<Card title='Description' id='dcard'>
				<div className='info'>
					<h5>BY  : </h5>
					<span className='props'>{by}</span>
				</div>
				<div className='info'>
					<h5>TITLE  : </h5>
					<span className='props'>{title}</span>
				</div>
				<div className='info'>
					<h5>DESCRIPTION  : </h5>
					<span className='props'>{decription}</span>
				</div>
				<div className='info'>
					<h5>ADDRESS  : </h5>
					<span className='props'>{address}</span>
				</div>
				<div className='info'>
					<h5>DATED  : </h5>
					<span className='props'>{date}</span>
				</div>
			</Card>
		</div>
	);
};

export default DescriptionCard;
