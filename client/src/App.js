import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login.jsx';
import Register from './components/register.jsx';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login}/>       
      <Switch>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
