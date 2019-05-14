import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <Landing />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
