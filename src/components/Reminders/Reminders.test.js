import React from 'react';
import ReactDOM from 'react-dom';
import Reminders from './Reminders';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <Reminders />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
