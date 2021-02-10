import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setCurrentUser, setAuth } from "../../redux/user/user.actions";
import image from './loginImage.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Login = ({ setCurrentUser, setAuth }) => {

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
				await setCurrentUser(res.data.user);
				await setAuth();
				history.push('/landing-page');
			}
		} catch (err) {
			console.error(err);
		}
	};

	const imageStyle = {
		width: '50vw',
		height: '100vh'
	}

	return (
		<div className="divider">
			<div>
				<img src={image} alt="traffic-image" style={imageStyle}/>
			</div>
			<div className="loginDivider">
				<div className="loginCard">
					<MDBContainer>
						<MDBRow>
							<MDBCol>	
								<form>
									<p className="h4 text-center mb-4" style={{fontSize:'35px'}}>Sign in</p>
									<label htmlFor="defaultFormRegisterNameEx" className="grey-text" style={{textAlign:'left'}}>
										Enter Phone Number </label>
											<input
												className="form-control"
												id="textInput"
												type='text'
												placeholder='Enter Phone Number'
												name='phoneNumber'
												value={phoneNumber}
												onChange={(e) => onChange(e)}
												required />
									<label htmlFor="defaultFormLoginPasswordEx" className="grey-text" >
											Enter Password </label>
											<input
												className="form-control"
												id="passwordInput"
												type='password'
												placeholder='Enter Password'
												name='password'
												value={password}
												onChange={(e) => onChange(e)}
												required />

											<MDBBtn color="primary" type="submit" onClick={(e) => onSubmit(e)}>Login</MDBBtn>
								</form>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	setAuth: () => dispatch(setAuth())
});

export default connect(null, mapDispatchToProps)(Login);
