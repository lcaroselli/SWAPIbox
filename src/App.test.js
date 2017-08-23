import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import Card from './Components/Card/Card.js';
import Container from './Components/Container/Container.js';
import Header from './Components/Header/Header.js';
import Nav from './Components/Nav/Nav.js';


import App from './App';


describe('App', () => {

    const mockMovieIntros = [
      {title: 'A New Hope', releaseDate: '1977-05-25', opening:'It is a period of civil war.'},
      {title: 'Attack of the Clones', releaseDate: '2002-05-16', opening:'There is unrest in the Galactic'},
      {title: 'The Phantom Menace', releaseDate: '2002-05-16', opening:'There is unrest in the Galactic'},
      {title: 'Revenge of the Sith', releaseDate: '2002-05-16', opening:'There is unrest in the Galactic'},
      {title: 'Return of the Jedi', releaseDate: '2002-05-16', opening:'There is unrest in the Galactic'},
      {title: 'The Empire Strikes Back', releaseDate: '1980-05-17', opening:'It is a dark time for the'},
      {title: 'The Force Awakens', releaseDate: '2015-12-11', opening:'Luke Skywalker has vanished'},
    ]

    test.skip('it should render Components when it mounts', () => {
      console.log("yeah!")
    })

    test('it should start with a default state', () => {
      const wrapper = shallow(<App />);
      let defaultState = {openingText: [], people: null, planets: null, vehicles: null};

      expect(wrapper.state()).toEqual(defaultState);
    })

    test('its state.openingTxt should have an array length of 7, and index should match received data', () => {

      console.log('fetchBefore: ', fetchMock)

      fetchMock.get('https://swapi.co/api/films/', {
        status: 200,
        body: mockMovieIntros,
      });

      const wrapper = mount(<App />)

      console.log('fetchAfter: ', fetchMock)
      console.log('fetchMock.lastOptions()', fetchMock.lastOptions('https://swapi.co/api/films/'))

      expect(fetchMock.lastOptions('https://swapi.co/api/films/')).toEqual(undefinded)

    })

})
