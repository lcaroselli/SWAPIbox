import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.js"
import Nav from "./Components/Nav/Nav.js"
import Container from "./Components/Container/Container.js"


export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount(url) {
    fetch(`https://swapi.co/api/${url}/`)
    .then(data => data.json())
    .then(data => console.log(data.results))
    .then(data => this.fetchSubData(data.results))
    .catch(error => console.log('ERROR'))
  }


  fetchSubData(data) {
    const personHomeworldData = data.map(person => {
      return fetch(person.homeworld)
        .then(resolved => resolved.json())
    })

    const personSpeciesData = data.map(person => {
      return fetch(person.species)
        .then(resolved => resolved.json())
    })

    // console.log(personHomeworldData)
  }

  render() {
    return (
      <div>
        < Header />
        < Nav />
        < Container />
        { this.componentDidMount('people') }
      </div>
    );
  }
}
