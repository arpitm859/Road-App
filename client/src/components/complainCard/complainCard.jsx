import React from 'react';
import { Progress, Card } from 'antd';
import { Link } from 'react-router-dom';

const ComplainCard = ({date, title, id, address, city}) => {
    return (
        <Link to={`/status/${id}`}>
            <Card
                title={title}
                bordered={true}
                style={{ width: '90vw', backgroundColor: 'white', marginTop: '1rem', marginBottom: '1rem'}}
            >
                <p>{date}</p>
                <p>{address}</p>
                <p>{city}</p>
                <Progress percent={50} status='active' />
            </Card>
        </Link>
    );
}

export default ComplainCard;