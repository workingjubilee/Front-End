import React from 'react';
import ReactDOM from 'react-dom';
import MedicationList from './MedicationList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MedicationList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
