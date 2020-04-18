import React from 'react';
import ReactDOM from 'react-dom';
import toJson from 'enzyme-to-json';
import App from './App';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);   //lève une exception en cas d'erreur
  ReactDOM.unmountComponentAtNode(div);
});


/*Snapshot differences */

// it('renders correctly enzyme', () => {
//   const wrapper = shallow(<App />)
//
//   expect(toJson(wrapper)).toMatchSnapshot();
// });
