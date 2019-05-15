import React from 'react';
import ReactDOM from 'react-dom';
import Med from './Med';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Med med={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
