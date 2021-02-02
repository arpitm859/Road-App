import { React } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navbars = () => {
	return (
		<div>
			<Navbar style={{ backgroundColor: '#7CB9F5', fontWeight: 'bold' }}>
				<div className='navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2'>
					<ul class='navbar-nav mr-auto'>
						<li class='nav-item active'>
							<Link to='/landing-page'>
								<Navbar.Brand class='nav-link' style={{ color: 'white' }}>
									Bombay Municipal Corporation
								</Navbar.Brand>
							</Link>
						</li>
					</ul>
				</div>
				<div className='mx-auto'>
					<Nav>
						<Nav.Link
							href='/complains'
							style={{ color: 'white', paddingLeft: '1rem' }}
							class='navbar-brand mx-auto'
						>
							Register a Complaint
						</Nav.Link>
						<Nav.Link
							href='/existing-complaints'
							style={{ color: 'white', paddingLeft: '2rem' }}
							class='navbar-brand mx-auto'
						>
							Existing Complaints
						</Nav.Link>
						<Nav.Link
							href='/my-complaints'
							style={{ color: 'white', paddingLeft: '2rem' }}
							class='navbar-brand mx-auto'
						>
							My Complaints
						</Nav.Link>
						<Nav.Link
							href='/my-issues'
							style={{ color: 'white', paddingLeft: '2rem' }}
							class='navbar-brand mx-auto'
						>
							Issues Assigned
						</Nav.Link>
					</Nav>
				</div>
				<div class='navbar-collapse collapse w-100 order-3 dual-collapse2'>
					<ul class='navbar-nav ml-auto'>
						<li class='nav-item'>
							<Nav.Link
								href='/'
								onClick={() => {
									localStorage.removeItem('token');
									localStorage.removeItem('userID');
								}}
								style={{ color: 'white' }}
								class='nav-link'
							>
								Logout
							</Nav.Link>
						</li>
					</ul>
				</div>
			</Navbar>
		</div>
	);
};

export default Navbars;
