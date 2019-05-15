import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
        <Navigation />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
