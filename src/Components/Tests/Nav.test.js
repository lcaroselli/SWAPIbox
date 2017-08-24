import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav/Nav';
import { shallow, mount } from 'enzyme';

describe('Nav', () => {
  let wrapper;
  let mountWrapper;
  const handleButtonClickFn = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<Nav
                        handleButtonClick = { handleButtonClickFn } />);
    mountWrapper = mount(<Nav
                        handleButtonClick = { handleButtonClickFn } />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a function for the handleChange property', () => {
    expect(mountWrapper.props().handleButtonClick).toEqual(handleButtonClickFn);
  })

  it.skip('should display a different category depending on the button clicked', () => {
    const peopleButton = wrapper.find('.people');
    const planetsButton = wrapper.find('.planets');

    peopleButton.simulate('click');

    expect(handleButtonClickFn).toHaveBeenCalled();
    expect(handleButtonClickFn).toHaveBeenCalledTimes(1);

    planetsButton.simulate('click');
    expect(handleButtonClickFn).toHaveBeenCalledTimes(2);
  })

  it('should render 1 nav element', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  })

  it('should render a people button', () => {
    expect(wrapper.find('.people').length).toEqual(1);
  })

  it('should render a planets button', () => {
    expect(wrapper.find('.planets').length).toEqual(1);
  })

  it('should render a vehicles button', () => {
    expect(wrapper.find('.vehicles').length).toEqual(1);
  })

  it('should render a favorites button', () => {
    expect(wrapper.find('.favorites').length).toEqual(1);
  })

})
