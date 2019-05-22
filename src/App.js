import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary.js';
import Spinner from 'components/Spinner/Spinner';

const Diary = lazy(() => import('./components/Diary/Diary'));
const UserProfile = lazy(() => import('./components/UserProfile/UserProfile'));
const Reminders = lazy(() => import('./components/Reminders/Reminders'));
const PillsContainer = lazy(() =>
  import('./components/PillsContainer/PillsContainer')
);
const Landing = lazy(() => import('./components/Landing/Landing'));
const Loading = lazy(() => import('./components/Loading/Loading'));
const Identify = lazy(() => import('./components/Identify'));
const AddDosage = lazy(() => import('./components/AddDosage/AddDosage'));

function App() {
  return (
    <div className='App'>
      <Navigation />
      <ErrorBoundary>
        <React.Suspense fallback={<Spinner />}>
          <Route exact path='/' component={Landing} />
          <Route exact path='/landing' component={Landing} />
          <Route exact path='/loading' component={Loading} />
          <Route path='/user' component={UserProfile} />
          <Route path='/diary' component={Diary} />
          <Route path='/identify' component={Identify} />
          <Route path='/reminders' component={Reminders} />
          <Route path='/pills' component={PillsContainer} />
          <Route path='/adddosage' component={AddDosage} />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
