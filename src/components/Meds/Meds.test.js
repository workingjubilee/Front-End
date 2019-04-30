import React from 'react';
import ReactDOM from 'react-dom';
import MedList from './MedList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MedList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
