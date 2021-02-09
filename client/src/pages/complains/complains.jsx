import { React, useState } from 'react';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import './complains.css';
import { Divider, Button } from 'antd';
import UploadComponent from '../../components/uploadComponent/uploadComponent'

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 200,
		},
		backgroundColor: 'white',
		margin: '2.5rem',
		padding: '3rem',
	},
}));

const Complains = () => {
	const history = useHistory();

	const [type, setType] = useState();
	const [emergency,setEmergency] = useState();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [house, setHouse] = useState('');
	const [street, setStreet] = useState('');
	const [area, setArea] = useState('');
	const [pincode, setPincode] = useState('');
	const [landmark, setLandmark] = useState('');
	const [city, setCity] = useState('');

	const [chouse, setCHouse] = useState('');
	const [cstreet, setCStreet] = useState('');
	const [carea, setCArea] = useState('');
	const [cpincode, setCPincode] = useState('');
	const [clandmark, setCLandmark] = useState('');
	const [ccity, setCCity] = useState('');
	const [image, setImage] = useState();
	
	const handleChange = (event) => {
		setType(event.target.value);
	};

	const handleEmergency = (event) => {
		setEmergency(event.target.value);
	};

	const handleTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleDescription = (event) => {
		setDescription(event.target.value);
	};

	const handleCHouse = (event) => {
		setCHouse(event.target.value);
	};

	const handleCStreet = (event) => {
		setCStreet(event.target.value);
	};

	const handleCArea = (event) => {
		setCArea(event.target.value);
	};

	const handleCPincode = (event) => {
		setCPincode(event.target.value);
	};

	const handleCLandmark = (event) => {
		setCLandmark(event.target.value);
	};

	const handleCCity = (event) => {
		setCCity(event.target.value);
	};

	const handleHouse = (event) => {
		setHouse(event.target.value);
	};

	const handleStreet = (event) => {
		setStreet(event.target.value);
	};

	const handleArea = (event) => {
		setArea(event.target.value);
	};

	const handlePincode = (event) => {
		setPincode(event.target.value);
	};

	const handleLandmark = (event) => {
		setLandmark(event.target.value);
	};

	const handleCity = (event) => {
		setCity(event.target.value);
	};

	const props = {
		name: 'imageFile',
		multiple: false,
		action: '/upload',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		},
		onChange(info) {
			const { status } = info.file;
			if (status !== 'uploading') {
				setImage(info.file.response.url);
			}
			if (status === 'done') {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};

	const onSubmit = async () => {
		const newComplaint = {
			title: title,
			description: description,
			emergencyState: emergency,
			complaint_house: house,
			complaint_street: street,
			complaint_area: area,
			complaint_pin: pincode,
			complaint_landmark: landmark,
			complaint_city: city,
			complainant_house_no: chouse,
			complainant_street: cstreet,
			complainant_area: carea,
			complainant_pin: cpincode,
			complainant_landmark: clandmark,
			complainant_city: ccity,
			image: image
		};
		try {
			const config = {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			};
			const res = await axios.post('/complaints', newComplaint, config);
			if (res.data.success) {
				console.log(res);
				history.push('/my-complaints');
			} else {
				alert(res.error.msg);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const classes = useStyles();
	return (
		<div className='complaint-form'>
			<div className='complain'>
				<form className={classes.root} noValidate>
					<h2 style={{ color: '#454749', textAlign: 'center', padding: '1.5rem' }}>
						{' '}
						Application to lodge a Complaint{' '}
					</h2>
					<div>
						<Divider style={{ fontSize: '22px', margin: '2rem 0' }}>
							Define Nature of the Complaint
						</Divider>
						<div className='rowC'>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}> Select the Nature of Complaint</p>
								<TextField
									id='outlined-select-type'
									select
									label='Nature'
									value={type}
									onChange={handleChange}
									variant='outlined'
									style={{ width: '17rem' }}
									required
								>
									<MenuItem value='Choose'>Choose</MenuItem>
									<MenuItem value='Potholes'>Potholes</MenuItem>
									<MenuItem value='Traffic'>Traffic</MenuItem>
									<MenuItem value='Road Condition'>Condition of the Road</MenuItem>
									<MenuItem value='Others'>Others</MenuItem>
								</TextField>
							</div>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>Select the State of Emergency</p>
								<TextField
									id='outlined-select-type'
									select
									label='State'
									value={emergency}
									onChange={handleEmergency}
									variant='outlined'
									style={{ width: '17rem' }}
									required
								>
									<MenuItem value='Choose'>Choose</MenuItem>
									<MenuItem value='Low'>Low</MenuItem>
									<MenuItem value='Medium'>Medium</MenuItem>
									<MenuItem value='High'>High</MenuItem>
									<MenuItem value='Death'>Death</MenuItem>
								</TextField>
							</div>
						</div>
					</div>
					<Divider style={{ fontSize: '22px', margin: '2rem 0' }}>
						Description of the Complaint
					</Divider>
					<div style={{ paddingTop: '1rem' }}>
						<div className='rowC'>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}> Title of Complaint</p>
								<TextField
									id='outlined'
									label='Title'
									multiline
									value={title}
									onChange={handleTitle}
									variant='outlined'
									style={{ width: '17rem' }}
									required
								/>
							</div>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>Description of the Complaint</p>
								<TextField
									id='outlined'
									label='Description'
									multiline
									value={description}
									onChange={handleDescription}
									rows={4}
									variant='outlined'
									style={{ width: '20rem' }}
									required
								/>
							</div>
						</div>
						<Divider style={{ fontSize: '22px', margin: '2rem 0' }}>
							Location of the Complaint
						</Divider>
						<div className='rowC'>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}> House</p>
								<TextField
									id='outlined'
									label='House'
									multiline
									value={house}
									onChange={handleHouse}
									variant='outlined'
									style={{ width: '17rem' }}
									required
								/>
							</div>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>Street</p>
								<TextField
									id='outlined'
									label='Street'
									multiline
									value={street}
									onChange={handleStreet}
									variant='outlined'
									style={{ width: '17rem' }}
									required
								/>
							</div>
						</div>
						<div className='rowC' style={{ paddingTop: '1.5rem' }}>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}> Area</p>
								<TextField
									id='outlined'
									label='Area'
									multiline
									value={area}
									onChange={handleArea}
									variant='outlined'
									style={{ width: '17rem' }}
									required
								/>
							</div>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>Pincode</p>
								<TextField
									id='outlined'
									label='Pincode'
									multiline
									value={pincode}
									onChange={handlePincode}
									variant='outlined'
									style={{ width: '17rem' }}
									required
								/>
							</div>
						</div>
						<div className='rowC' style={{ paddingTop: '1.5rem' }}>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>Landmark</p>
								<TextField
									id='outlined'
									label='Landmark'
									multiline
									value={landmark}
									onChange={handleLandmark}
									variant='outlined'
									style={{ width: '17rem' }}
									required
								/>
							</div>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>City</p>
								<TextField
									id='outlined'
									label='City'
									multiline
									value={city}
									onChange={handleCity}
									variant='outlined'
									style={{ width: '17rem' }}
									required
								/>
							</div>
						</div>
						<Divider style={{ fontSize: '22px', margin: '2rem 0' }}>
							Address of the Complainant
						</Divider>
						<div className='rowC'>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>House</p>
								<TextField
									id='outlined'
									label='House'
									multiline
									value={chouse}
									onChange={handleCHouse}
									variant='outlined'
									style={{ width: '17rem' }}
								/>
							</div>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>Street</p>
								<TextField
									id='outlined'
									label='Street'
									multiline
									value={cstreet}
									onChange={handleCStreet}
									variant='outlined'
									style={{ width: '17rem' }}
								/>
							</div>
						</div>
						<div className='rowC' style={{ paddingTop: '1.5rem' }}>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}> Area</p>
								<TextField
									id='outlined'
									label='Area'
									multiline
									value={carea}
									onChange={handleCArea}
									variant='outlined'
									style={{ width: '17rem' }}
								/>
							</div>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>Pincode</p>
								<TextField
									id='outlined'
									label='Pincode'
									multiline
									value={cpincode}
									onChange={handleCPincode}
									variant='outlined'
									style={{ width: '17rem' }}
								/>
							</div>
						</div>
						<div className='rowC' style={{ paddingTop: '1.5rem' }}>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>Landmark</p>
								<TextField
									id='outlined'
									label='Landmark'
									multiline
									value={clandmark}
									onChange={handleCLandmark}
									variant='outlined'
									style={{ width: '17rem' }}
								/>
							</div>
							<div style={{ paddingLeft: '3rem' }}>
								<p style={{ fontSize: '18px' }}>City</p>
								<TextField
									id='outlined'
									label='City'
									multiline
									value={ccity}
									onChange={handleCCity}
									variant='outlined'
									style={{ width: '17rem' }}
								/>
							</div>
						</div>
						<Divider style={{ fontSize: '22px', margin: '2rem 0' }}>
							Upload Complaint Image 
						</Divider>
					</div>
					<UploadComponent props={props}/>
					<Button type='primary' shape='round' style={{ margin: '3rem ' }} onClick = {(e) => onSubmit(e)}>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Complains;
