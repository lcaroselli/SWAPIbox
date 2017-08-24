import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Card />);
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  })

})
