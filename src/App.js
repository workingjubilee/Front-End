import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Diary from './components/Diary/Diary';
import Login from './components/Login/Login';
import Scan from './components/Scan/Scan';
import SignUp from './components/SignUp/SignUp';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Landing from './components/Landing/Landing';
import Callback from './components/Callback/Callback'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route exact path='/' component={Home} />
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={SignUp} />
        <Route exact path='/diary' component={Diary} />
        {/* <Route exact path='/scan' component={Scan} /> */}
        <Route exact path='/dashboard' component={UserDashboard} />
        <Route exact path = '/callback' component={Callback} />
      </header>
    </div>
  );
}

function Home() {
  return (
    <div className='homeScreen'>
      <h2>Home screen</h2>
      <NavLink to='/login'>Login</NavLink>
      <br />
      <NavLink to='/register'>Register</NavLink>
    </div>
  );
}

export default App;
