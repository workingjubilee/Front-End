import React from 'react';
import ReactDOM from 'react-dom';
import Rems from './Rems';
import AppWrapper from 'AppWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <Rems />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
