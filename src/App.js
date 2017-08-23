import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.js"
import Nav from "./Components/Nav/Nav.js"
import Container from "./Components/Container/Container.js"


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      people:   null,
      openingText: [],
    }
  }

  componentDidMount(films) {
    this.fetchMovieOpening()
    this.fetchPeopleData()
  }

  fetchMovieOpening() {
    const movieOpeningArray =
    fetch(`https://swapi.co/api/films/`)
    .then(data => data.json())
    .then(data => (data.results).map((film)=>{
      return {
        title: film.title,
        releaseDate: film.release_date,
        opening: film.opening_crawl
      }
      }))
    .then(data => {
      this.setState({
        openingText: data
      })
    })
  }

    fetchPeopleData() {
      fetch(`https://swapi.co/api/people/`)
      .then(data => data.json())
      .then(data => this.fetchSpecificPeopleData(data.results))
      .then(newPeople =>
        this.setState({
          people: newPeople
        })
      )
    }

    fetchSpecificPeopleData(data) {
      const unresolvedPromises = data.map(person => {
        return fetch(person.homeworld)
        .then(response => response.json())

      })

      return Promise.all(unresolvedPromises)
      .then(planet => { return planet.map((world, index, array) => {
        return Object.assign({planet: world.name, population: world.population}, data[index])
      })
    })
  }

  render() {
    return (
      <div>
        < Header openingText = { this.fetchMovieOpening }/>
        < Nav />
        < Container />
      </div>
    );
  }
}
