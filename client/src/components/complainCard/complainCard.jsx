import React from 'react';
import { Progress, Card } from 'antd';
import { Link } from 'react-router-dom';

const ComplainCard = ({date, title, id, address, city}) => {
    return (
					<div style={{ textAlign: 'left' }}>
						<Link to={`/status/${id}`}>
							<Card
								title={title}
								bordered={true}
								style={{
									width: '90vw',
									backgroundColor: 'white',
									marginTop: '1.5rem',
									marginBottom: '1.5rem',
								}}
							>
								<p>Date : {date}</p>
								<p>Address : {address}</p>
								<p>City : {city}</p>
								<Progress percent={50} status='active' />
							</Card>
						</Link>
					</div>
				);
}

export default ComplainCard;