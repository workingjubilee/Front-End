import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './UserProfile';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <UserProfile />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
