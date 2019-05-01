import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import { MemoryRouter } from 'react-router-dom'; // Wrap router components to make them testable

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
