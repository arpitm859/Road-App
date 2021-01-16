import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Complains from './components/complains.jsx'; 
import ExistingComplaints from './components/existingComplaints.jsx';
import MyComplaints from './components/myComplaints.jsx';
import IssuesAssigned from './components/issuesAssigned.jsx';
import LandingPage from './components/landingPage.jsx';
import Status from './components/status.jsx'

function App() {

  return (
    <div className="App">
      <Route exact path="/login" component={Login}/>       
      <Switch>
        <Route path='/landing-page' component={LandingPage}/>
        <Route path="/register" component={Register}/>
        <Route path="/complains" component={Complains} />
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/existing-complaints" component={ExistingComplaints} />
        <Route path="/my-complaints" component={MyComplaints} />
        <Route path="/my-issues" component={IssuesAssigned} />
        <Route path="/status/:id" component={Status} />
      </Switch>
    </div>
  );
}

export default App;
