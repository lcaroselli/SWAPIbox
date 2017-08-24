import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  const cardSelected = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render the Header and Nav components', () => {
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Nav').length).toEqual(1);
    })

  it('should have an initial state of data set to an empty array', () => {
    expect(wrapper.state().dataArray.length).toEqual(0);
  })

  it('should have an initial state of openingText set to an empty array', () => {
    expect(wrapper.state().openingText.length).toEqual(0);
  })

  it('should have an initial display page set to initial', () => {
    expect(wrapper.state().displayPage).toEqual('initial');
  })

  it('should have an initial people state set to null', () => {
    expect(wrapper.state().people).toEqual(null);
  })

  it('should have an initial planets state set to null', () => {
    expect(wrapper.state().planets).toEqual(null);
  })

  it('should have an initial vehicles state set to null', () => {
    expect(wrapper.state().vehicles).toEqual(null);
  })

  it('should have an initial favorite state set to an empty array', () => {
    expect(wrapper.state().favorite.length).toEqual(0);
  })

  it.skip('componentDidMount changes the state of the openingText, people, planets, and vehicles arrays', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.state().openingText.length).toEqual(7);
    expect(wrapper.state().people.length).toEqual(10);
    expect(wrapper.state().planets.length).toEqual(10);
    expect(wrapper.state().vehicles.length).toEqual(10);
  })

  it.skip('should be able to display just the matching cards for that category', () => {
    wrapper = mount(<App />);
    const peopleBtn = wrapper.find('.people');
    peopleBtn.simulate('click');
    expect(wrapper.state().people.length).toEqual(10);
  })
})
