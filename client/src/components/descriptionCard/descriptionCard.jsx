import { React} from 'react';
import { Card } from 'antd';
import './descriptionCard.css';
import { Image } from 'antd';

const DescriptionCard = ({by, date, title, decription, address, url}) => {
	return (
		<div>
			<Card id='dcard'>
				<div className='description'>
					<div className='desc-image'>
						<Image width={250} src={url} />
					</div>
					<div className='desc'>
						<div className='info'>
							<span className='props'>BY: </span>
							<span className='prop'>{by}</span>
						</div>
						<div className='info'>
							<span className='props'>TITLE: </span>
							<span className='prop'>{title}</span>
						</div>
						<div className='info'>
							<span className='props'>DESCRIPTION: </span>
							<span className='prop'>{decription}</span>
						</div>
						<div className='info'>
							<span className='props'>ADDRESS: </span>
							<span className='prop'>{address}</span>
						</div>
						<div className='info'>
							<span className='props'>DATED: </span>
							<span className='prop'>{date}</span>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default DescriptionCard;
