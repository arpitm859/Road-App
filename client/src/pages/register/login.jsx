import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import setCurrentUser from '../../redux/user/user.actions';

const Login = ({ setCurrentUser }) => {
	const history = useHistory();
	const [loginData, setLogin] = useState({
		phoneNumber: '',
		password: '',
	});
	const { phoneNumber, password } = loginData;
	const onChange = (e) =>
		setLogin({ ...loginData, [e.target.name]: e.target.value });
	const onSubmit = async () => {
		const newUser = {
			username: phoneNumber,
			password: password,
		};
		try {
			const res = await axios.post('/users/login', newUser);
			if (res.data.success) {
				localStorage.setItem('token', res.data.token);
				console.log(res.data.user);
				setCurrentUser(res.data.user);

				history.push('/landing-page');
			}
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
			<h1
				className='heading'
				style={{ color: 'white', paddingTop: '4rem', paddingBottom: '0px' }}
			>
				Bombay Municipal Corporation (Road Department)
			</h1>
			<div className='main-card'>
				<div className='column'>
					<div className='login-card'>
						<h1 className='heading' style={{ color: 'white' }}>
							Login
						</h1>
						<div className='column'>
							<input
								type='text'
								placeholder='Enter Phone Number'
								name='phoneNumber'
								value={phoneNumber}
								onChange={(e) => onChange(e)}
								required
							/>
						</div>
						<div className='column'>
							<input
								type='password'
								placeholder='Enter Password'
								name='password'
								value={password}
								onChange={(e) => onChange(e)}
								required
							/>
						</div>
						<div className='column'>
							<button
								type='button'
								className='btn btn-primary'
								onClick={(e) => onSubmit(e)}
							>
								Login
							</button>
						</div>
						<Link to='/register' style={{ color: 'white' }}>
							Don't have an account? Sign Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
