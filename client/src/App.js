import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import General from './components/general.jsx';
import Complains from './components/complains.jsx'; 

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login}/>       
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/general" component={General} />
        <Route path="/complains" component={Complains} />
      </Switch>
    </div>
  );
}

export default App;
