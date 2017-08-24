import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';
import { shallow, mount } from 'enzyme';

describe('Header', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Header />);
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it.skip('should render a vehicles button', () => {
    expect(wrapper.find('.vehicles').length).toEqual(1);
  })

  it.skip('should render a favorites button', () => {
    expect(wrapper.find('.favorites').length).toEqual(1);
  })

})
