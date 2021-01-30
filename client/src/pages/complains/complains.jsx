import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 200,
		},
	},
}));
const Complains = () => {
	const history = useHistory();
	const [complaints, setComplaints] = useState({
		complaintType: '',
		emergencyState: '',
		complaintTitle: '',
		description: '',
		house: '',
		street: '',
		area: '',
		pincode: '',
		city: '',
		landmark: '',
		complainantHouse: '',
		complainantStreet: '',
		complainantArea: '',
		complainantPincode: '',
		complainantCity: '',
		complainantLandmark: '',
	});

	const {
		complaintType,
		emergencyState,
		complaintTitle,
		description,
		house,
		street,
		area,
		pincode,
		city,
		landmark,
		complainantHouse,
		complainantStreet,
		complainantArea,
		complainantPincode,
		complainantCity,
		complainantLandmark,
	} = complaints;

	const onChange = (e) =>
		setComplaints({ ...complaints, [e.target.name]: e.target.value });

	const onSubmit = async () => {
		const newComplaint = {
			title: complaintType,
			description: description,
			emergencyState: emergencyState,
			complaint_house: house,
			complaint_street: street,
			complaint_area: area,
			complaint_pin: pincode,
			complaint_landmark: landmark,
			complaint_city: city,
			complainant_house_no: complainantHouse,
			complainant_street: complainantStreet,
			complainant_area: complainantArea,
			complainant_pin: complainantPincode,
			complainant_landmark: complainantLandmark,
			complainant_city: complainantCity,
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
		<div>
			<form className={classes.root} noValidate>
				<h2 style={{ color: '#454749' }}> Application to lodge a Complaint </h2>
				<TextField label='Outlined' variant='outlined' />
			</form>
		</div>
	);
};

export default Complains;
