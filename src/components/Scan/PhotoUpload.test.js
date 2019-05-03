import React from 'react';
import ReactDOM from 'react-dom';
import PhotoUpload from './PhotoUpload';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <PhotoUpload />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
