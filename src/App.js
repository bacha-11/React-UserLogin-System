import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user' component={User} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/register' component={Register} />

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
