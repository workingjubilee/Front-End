import React from 'react';
import ReactDOM from 'react-dom';
import Diary from './Diary';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWrapper><Diary /></AppWrapper>, div);
  ReactDOM.unmountComponentAtNode(div);
});
