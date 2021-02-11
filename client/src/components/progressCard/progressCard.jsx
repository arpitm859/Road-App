import { React } from 'react';
import './progressCard.css';
import { Steps, Card } from 'antd';
const { Step } = Steps;

const ProgressCard = ({ status, onSubmit }) => {
	const check = (currentStatus, progress) => {
		if (currentStatus > progress + 1) {
			return 'Waiting';
		} else if (currentStatus < progress + 1) {
			return 'Finished';
		} else {
			return 'In Progress';
		}
	};
	return (
		<div>
			<Card id='progress-card' title='Complain Status' bordered={true}>
				<Steps
					direction='vertical'
					current={status}
					style={{ marginLeft: '2rem', paddingRight: '2rem', color: 'white' }}
				>
					<Step
						title={check(1, status)}
						description='Complaint Acknowledged.'
						style={{ color: 'white' }}
					/>
					<Step
						title={check(2, status)}
						description='Investigation handed to Agency.'
						style={{ color: 'white' }}
					/>
					<Step
						title={check(3, status)}
						description='Agency Investigation Completed.'
						style={{ color: 'white' }}
					/>
					<Step
						title={check(4, status)}
						description='Problem identified.'
						style={{ color: 'white' }}
					/>
					<Step
						title={check(5, status)}
						description='Funds and requirements asked from Government.'
						style={{ color: 'white' }}
					/>
					<Step
						title={check(6, status)}
						description='Funds transferred to agency.'
						style={{ color: 'white' }}
					/>
					<Step
						title={check(7, status)}
						description='Agency working on location.'
						style={{ color: 'white' }}
					/>
					<Step
						title={check(8, status)}
						description='Issue resolved from agency.'
						style={{ color: 'white' }}
					/>
					<Step
						title={check(9, status)}
						description='Approval from government.'
						style={{ color: 'white' }}
					/>
					<Step
						title={check(10, status)}
						description='Issue resolved.'
						style={{ color: 'white' }}
					/>
				</Steps>
				<button onClick={onSubmit} />
			</Card>
		</div>
	);
};

export default ProgressCard;
