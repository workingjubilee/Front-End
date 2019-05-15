import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <Dashboard />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
