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
    .then(data => {this.setState({
      openingText: data
    })})

    }




  // fetchSubData(data) {
  //   const personHomeworldData = data.map(person => {
  //     return fetch(person.homeworld)
  //       .then(resolved => resolved.json())
  //       .then(worlds => console.log('worlds: ', worlds))
  //   })
  //
  //   const personSpeciesData = data.map(person => {
  //     return fetch(person.species)
  //       .then(resolved => resolved.json())
  //   })
  // //
  //   console.log(personHomeworldData)
  // }

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
