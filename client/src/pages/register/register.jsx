import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import image from './loginImage.jpg';

const Register = () => {
	const history = useHistory();
	const [registerData, setRegister] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phoneNumber: '',
		stakeholder: '',
		password: '',
	});
	const {
		firstname,
		lastname,
		email,
		phoneNumber,
		stakeholder,
		password,
	} = registerData;

	const onChange = (e) =>
		setRegister({ ...registerData, [e.target.name]: e.target.value });
	const onSubmit = async () => {
		const newUser = {
			username: phoneNumber,
			firstName: firstname,
			lastName: lastname,
			email: email,
			public: true,
			agency: false,
			gov: false,
			password: password,
		};
		if (newUser.stakeholder === 'agency') {
			newUser.agency = true;
			newUser.gov = false;
		} else if (stakeholder === 'gov') {
			newUser.agency = false;
			newUser.gov = true;
		}
		try {
			const res = await axios.post('/users/register', newUser);
			if (res.data.success) {
				history.push('/');
			}
		} catch (err) {
			console.error(err.response.data);
		}
	};

	const imageStyle = {
		width: '50vw',
		height: '100vh',
	};

	return (
		<div className='divider'>
			<div>
				<img src={image} alt='traffic-image' style={imageStyle} />
			</div>
			<div className='loginDivider'>
				<div className='registerCard'>
					<MDBContainer>
						<MDBRow>
							<MDBCol>
								<p className='h4 text-center mb-4' style={{ fontSize: '35px' }}>
									Register
								</p>

								<label className='grey-text'>Enter your First Name</label>
								<input
									type='text'
									placeholder='Enter First Name'
									name='firstname'
									className='form-control'
									value={firstname}
									onChange={(e) => onChange(e)}
									required
								/>

								<label className='grey-text'>Enter your Last Name</label>
								<input
									type='text'
									placeholder='Enter Last Name'
									name='lastname'
									className='form-control'
									value={lastname}
									onChange={(e) => onChange(e)}
									required
								/>

								<label className='grey-text'>Enter your Email</label>
								<input
									type='email'
									placeholder='Enter Email ID'
									className='form-control'
									name='email'
									value={email}
									onChange={(e) => onChange(e)}
								/>

								<label className='grey-text'>Enter Phone Number</label>
								<input
									type='text'
									placeholder='Enter Phone Number'
									className='form-control'
									name='phoneNumber'
									value={phoneNumber}
									onChange={(e) => onChange(e)}
									required
								/>

								<label className='grey-text'> Choose Status type </label>
								<select
									id='stakeholder-field'
									className='stakeholder form-control'
									name='stakeholder'
									onChange={(e) => onChange(e)}
									value={stakeholder}
								>
									<option value='' disabled selected>
										Enter Membership Type
									</option>
									<option value='public'>General Citizen</option>
									<option value='agency'>Member of agency</option>
									<option value='gov'>Government Official</option>
								</select>

								<label className='grey-text'> Enter password </label>
								<input
									type='password'
									placeholder='Enter Password'
									name='password'
									className='form-control'
									onChange={(e) => onChange(e)}
									value={password}
									required
								/>

								<MDBBtn
									color='primary'
									type='submit'
									onClick={(e) => onSubmit(e)}
									style={{ margin: '1.5rem' }}
								>
									Register
								</MDBBtn>
								<br />
								<Link to='/' style={{ color: 'grey' }}>
									Already have an account? Login
								</Link>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</div>
			</div>
		</div>
	);
};

export default Register;
