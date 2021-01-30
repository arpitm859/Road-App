import { React, useState, useEffect } from 'react';
import { Steps, Card } from 'antd';
import './descriptionCard.css';
const { Step } = Steps;

const DescriptionCard = ({data}) => {
    console.log(data)
	return (
		<div>
			<Card title='Description'>
                
            </Card>
		</div>
	);
};

export default DescriptionCard;
