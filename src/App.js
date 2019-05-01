import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Diary from './components/Diary/Diary';
import Login from './components/Login/Login';
// import Scan from './components/Scan/Scan';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import Callback from './components/Callback/Callback';
import Loading from './components/Loading/Loading';



function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route exact path='/' component={Home} />
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/login' render={props => <Login {} />} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/diary' component={Diary} />
        {/* <Route exact path='/scan' component={Scan} /> */}
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/callback' component={Callback} />
        <Route
          exact
          path='/loading'
          render={props => <Loading {...props} auth={auth} />}
        />
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
