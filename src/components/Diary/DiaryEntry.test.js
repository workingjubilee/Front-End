import React from 'react';
import ReactDOM from 'react-dom';
import DiaryEntry from './DiaryEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DiaryEntry diaryEntry={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});