import { React } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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
import { connect } from 'react-redux';

function App({ userAuth }) {
	return (
		<div className='App'>
			<Route exact path='/'>
				<Redirect to={userAuth ? '/landing-page' : '/login'} />
			</Route>
			<Route exact path='/login' component={Login} />
			<Route exact path='/register' component={Register} />
			<Navbars />
			<Switch>
				<GuardedRoute
					path='/landing-page'
					component={LandingPage}
					auth={userAuth}
				/>
				<GuardedRoute path='/complains' component={Complains} auth={userAuth} />
				<GuardedRoute
					path='/existing-complaints'
					component={ExistingComplaints}
					auth={userAuth}
				/>
				<GuardedRoute
					path='/my-complaints'
					component={MyComplaints}
					auth={userAuth}
				/>
				<GuardedRoute
					path='/my-issues'
					component={IssuesAssigned}
					auth={userAuth}
				/>
				<GuardedRoute path='/status/:id' component={Status} auth={userAuth} />
			</Switch>
		</div>
	);
}

const mapStateToProps = ({ user }) => ({
	userAuth: user.userAuth,
});

export default connect(mapStateToProps)(App);
