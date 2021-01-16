import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Complains from './components/complains.jsx'; 
import ExistingComplaints from './components/existingComplaints.jsx';
import MyComplaints from './components/myComplaints.jsx';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login}/>       
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/complains" component={Complains} />
        <Route path="/existing-complaints" component={ExistingComplaints} />
        <Route path="/my-complaints" component={MyComplaints} />
      </Switch>
    </div>
  );
}

export default App;
