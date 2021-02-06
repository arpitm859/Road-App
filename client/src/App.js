import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/register/login.jsx';
import Register from './pages/register/register.jsx';
import Complains from './pages/complains/complains.jsx';
import ExistingComplaints from './pages/existingComplaints/existingComplaints.jsx';
import MyComplaints from './pages/myComplaints/myComplaints.jsx';
import IssuesAssigned from './pages/issuesAssigned/issuesAssigned.jsx';
import LandingPage from './pages/landingPage/landingPage.jsx';
import Status from './pages/status/status.jsx';
import Navbars from './components/navbar/navbar';
import GuardedRoute from './components/guardedRoute/guardedRoute';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.actions';

function App({setCurrentUser}) {
	const auth = () => {
		const token = localStorage.getItem('token');
		try {
			const date = new Date(0);
			const decoded = jwt_decode(token);
			date.setUTCSeconds(decoded.exp);
			return date.valueOf() > new Date().valueOf();
		} catch (err) {
			setCurrentUser(null);
			return false;
		}
	};
	return (
		<div className='App'>
			<Route exact path='/' component={Login} />
			<Route exact path='/register' component={Register} />
			<Navbars /> 
			<Switch>
				<Route path='/landing-page' component={LandingPage} auth={auth()} />
				<GuardedRoute path='/complains' component={Complains} auth={auth()} />
				<GuardedRoute path='/landing-page' component={LandingPage} auth={auth()} />
				<GuardedRoute
					path='/existing-complaints'
					component={ExistingComplaints}
					auth={auth()}
				/>
				<GuardedRoute
					path='/my-complaints'
					component={MyComplaints}
					auth={auth()}
				/>
				<GuardedRoute path='/my-issues' component={IssuesAssigned} auth={auth()} />
				<GuardedRoute path='/status/:id' component={Status} auth={auth()} />
			</Switch>
		</div>
	);
}
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
