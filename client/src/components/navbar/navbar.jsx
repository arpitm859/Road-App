import { React } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './navbar.css';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';
import { setAuth } from '../../redux/user/user.actions';
import { useLocation } from 'react-router-dom';

const Navbars = ({ currentUser, setCurrentUser, setAuth }) => {
	const location = useLocation();
	if (location.pathname === '/register' || location.pathname === '/login')
		return null;
	return (
		<div>
			<Navbar style={{ backgroundColor: '#7CB9F5', fontWeight: 'bold' }}>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<div className='navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2'>
					<ul class='navbar-nav mr-auto'>
						<li class='nav-item active'>
							<Link to='/landing-page'>
								<Navbar.Brand
									class='nav-link'
									style={{ color: 'white', fontSize: '24px' }}
								>
									Bombay Municipal Corporation
								</Navbar.Brand>
							</Link>
						</li>
					</ul>
				</div>
				<div className='mx-auto'>
					<Nav>
						<Nav.Link
							id='boxStyle'
							href='/complains'
							style={{ color: 'white', fontSize: '16px' }}
							class='navbar-brand mx-auto'
						>
							Register a Complaint
						</Nav.Link>
						<Nav.Link
							id='boxStyle'
							href='/existing-complaints'
							style={{ color: 'white', fontSize: '16px' }}
							class='navbar-brand mx-auto'
						>
							Existing Complaints
						</Nav.Link>
						{currentUser ? (
							currentUser.gov || currentUser.agency ? (
								<Nav.Link
									id='boxStyle'
									href='/my-issues'
									style={{ color: 'white', fontSize: '16px' }}
									class='navbar-brand mx-auto'
								>
									Issues Assigned
								</Nav.Link>
							) : null
						) : null}
					</Nav>
				</div>
				<div class='navbar-collapse collapse w-100 order-3 dual-collapse2'>
					<ul class='navbar-nav ml-auto'>
						<Nav.Link
							id='boxStyle'
							href='/my-complaints'
							style={{ color: 'white', fontSize: '18px' }}
							class='navbar-brand mx-auto'
						>
							My Complaints
						</Nav.Link>
						<Nav.Link
							id='boxStyle'
							href='/'
							onClick={() => {
								localStorage.removeItem('token');
								setCurrentUser(null);
								setAuth();
							}}
							style={{ color: 'white', fontSize: '18px' }}
							class='nav-link'
						>
							Logout
						</Nav.Link>
					</ul>
				</div>
			</Navbar>
		</div>
	);
};

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	setAuth: () => dispatch(setAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);
