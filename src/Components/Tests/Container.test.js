import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../Container/Container';
import { shallow, mount } from 'enzyme';

describe('Container', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Container />);
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  })

})
