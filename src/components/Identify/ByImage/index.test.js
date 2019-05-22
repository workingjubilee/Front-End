import React from 'react';
import ReactDOM from 'react-dom';
import ByImage from './index.js';
import AppWrapper from 'AppWrapper.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWrapper><ByImage /></AppWrapper>, div);
  ReactDOM.unmountComponentAtNode(div);
});
