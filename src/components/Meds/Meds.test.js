import React from 'react';
import ReactDOM from 'react-dom';
import Meds from './Meds';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <Meds />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
