import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Diary from './components/Diary/Diary';
import Scan from './components/Scan/Scan';
import Onboard from './components/Onboard/Onboard';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import Loading from './components/Loading/Loading';
import SearchPill from './components/Scan/SearchPill';
import AddPill from './components/AddPill/AddPill';
import SearchResults from './components/Scan/SearchResults';

import auth from './Auth';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/onboard' component={Onboard} />
        <Route exact path='/diary' component={Diary} />
        <Route exact path='/scan' component={Scan} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/loading' component={Loading} />
        <Route exact path='/searchpill' component={SearchPill} />
        <Route exact path='/addpill' component={AddPill} />
        <Route exact path='/searchresults' component={SearchResults} />
      </header>
    </div>
  );
}

function Home() {
  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
  };
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
      <button onClick={logOut}>Logout</button>
    </div>
  );
}

export default App;
