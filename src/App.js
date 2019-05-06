import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Diary from './components/Diary/Diary';
import Scan from './components/Scan/Scan';
import Onboard from './components/Onboard/Onboard';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import Callback from './components/Callback/Callback';
import Loading from './components/Loading/Loading';
import SearchPill from './components/Scan/SearchPill';

import auth from './Auth/Auth';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route exact path='/' component={Home} />
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/onboard' component={Onboard} />
        <Route exact path='/diary' component={Diary} />
        <Route exact path='/scan' component={Scan} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/callback' component={Callback} />
        <Route exact path='/loading' component={Loading} />
        <Route exact path='/searchpill' component={SearchPill} />
      </header>
    </div>
  );
}

function Home() {
  return (
    <div className='homeScreen'>
      <h2>Home screen</h2>
      <button
        onClick={event => {
          event.preventDefault();
          auth.lock.show();
        }}
      >
        Login or Register
      </button>
      {/* Logout needed for Auth0 testing, needs to be moved for production */}
      <button>Logout</button>
    </div>
  );
}

export default App;
