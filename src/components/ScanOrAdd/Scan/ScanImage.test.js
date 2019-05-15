import React from 'react';
import ReactDOM from 'react-dom';
import ScanImage from './ScanImage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScanImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
