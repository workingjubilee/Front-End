import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom'; // Wrap router components to make them unit-testable
import { Provider } from 'react-redux';
import store from 'store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
