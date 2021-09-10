import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';
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
        </Switch>
         
      </div>
    </Router>
  );
}

export default App;
