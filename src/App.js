import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary.js';
import Spinner from 'components/Spinner/Spinner';

import Auth from 'Auth';

const Diary = React.lazy(() => import('./components/Diary/Diary'));
const UserProfile = React.lazy(() =>
  import('./components/UserProfile/UserProfile')
);
const Dashboard = React.lazy(() => import('./components/Dashboard/Dashboard'));
const PillsContainer = React.lazy(() =>
  import('./components/PillsContainer/PillsContainer')
);
const Landing = React.lazy(() => import('./components/Landing/Landing'));
const Loading = React.lazy(() => import('./components/Loading/Loading'));
const ScanOrAdd = React.lazy(() =>
  import('./components/ScanOrAdd/Container.js')
);
const AddDosage = React.lazy(() => import('./components/AddDosage/AddDosage'));

function App() {
  return (
    <div className='App'>
      <Navigation />
      <ErrorBoundary>
        <React.Suspense fallback={<Spinner />}>
          <Route exact path='/' component={Home} />
          <Route exact path='/landing' component={Landing} />
          <Route exact path='/user' component={UserProfile} />
          <Route exact path='/loading' component={Loading} />
          <Route path='/diary' component={Diary} />
          <Route path='/scan' component={ScanOrAdd} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/pills' component={PillsContainer} />
          <Route path='/adddosage' component={AddDosage} />
        </React.Suspense>
      </ErrorBoundary>
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
          Auth.lock.show();
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
