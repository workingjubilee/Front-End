import React from 'react';
import ReactDOM from 'react-dom';
import Scan from './index.js';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <Scan />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
