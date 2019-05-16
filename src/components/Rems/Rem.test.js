import React from 'react';
import ReactDOM from 'react-dom';
import Rem from './Rem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rem rem={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
