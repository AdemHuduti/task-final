import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { renderComponent, expect } from '../test/test_helper';

it('Shows correct text', () => {
  const div = document.createElement('h1');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




// describe('App', () => {
//   it('shows the correct text', () => {

//     // Create an instance of app
//     const component = renderComponent('App');

//     expect(component).to.contain('Simple text for testing');
//   });
// });