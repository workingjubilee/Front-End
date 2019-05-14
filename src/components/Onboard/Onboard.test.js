import React from 'react';
import ReactDOM from 'react-dom';
import Onboard from './Onboard';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <Onboard />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
