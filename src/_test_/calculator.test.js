import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator.js';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
