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
import GuardedRoute from './components/guardedRoute/guardedRoute'

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={Login} />
			<Route exact path='/register' component={Register} />
			<Navbars />
			<Switch>
				<Route path='/landing-page' component={LandingPage} auth={true} />
				<GuardedRoute path='/complains' component={Complains} auth={true} />
				<GuardedRoute path='/landing-page' component={LandingPage} auth={true} />
				<GuardedRoute
					path='/existing-complaints'
					component={ExistingComplaints}
					auth={true}
				/>
				<GuardedRoute path='/my-complaints' component={MyComplaints} auth={true} />
				<GuardedRoute path='/my-issues' component={IssuesAssigned} auth={true} />
				<GuardedRoute path='/status/:id' component={Status} auth={true} />
			</Switch>
		</div>
	);
}

export default App;
