import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.js"
import Nav from "./Components/Nav/Nav.js"
import Container from "./Components/Container/Container.js"


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dataArray: [],
      openingText: [],
      displayPage: 'initial',
      people: null,
      planets: null,
      vehicles: null,
      favorite: []
    }
    this.getCategoryData = this.getCategoryData.bind(this)
    this.getFavorites = this.getFavorites.bind(this)
  }

  setFavoriteState(card) {

    let favState=this.state.favorite;
    console.log('card: ', card.props.subject)
    favState.push(card.props.subject)
    this.setState({ favorite: favState})

  }

  componentDidMount() {
    this.fetchMovieOpening()
    this.fetchPeopleData()
    this.fetchVehicleData()
    this.fetchPlanetsData()
  }

  fetchMovieOpening() {
    fetch(`https://swapi.co/api/films/`)
    .then(data => data.json())
    .then(data => (data.results).map((film)=>{
      return {
        title: film.title,
        releaseDate: film.release_date,
        opening: film.opening_crawl,
      }
      }))
    .then(data => {
      this.setState({
        openingText: data
      })
    })
  }

  fetchPeopleData(string) {
    fetch(`https://swapi.co/api/people/`)
      .then(data => data.json())
      .then(data => this.fetchHomeworldData(data.results))
      .then(data => data.map(person =>{
          return {
          Name: person.name,
          Homeworld: person.planet,
          Population: person.population,
          Species: 'Unknown'
        }
      }))
      .then(newPeople =>
        this.setState({
          people: newPeople
        })
      )
    }

  fetchHomeworldData(data) {
    const unresolvedPromises = data.map(person => {
      return fetch(person.homeworld)
      .then(response => response.json())
    })
    return Promise.all(unresolvedPromises)
      .then(planet => {
        return planet.map((world, index, array) => {
          return Object.assign({ planet: world.name, population: world.population}, data[index])
        })
    })
  }

  fetchPlanetsData(string) {
    fetch(`https://swapi.co/api/planets/`)
    .then(data => data.json())
    .then(data => (data.results).map((planet)=>{
      return {
        Name: planet.name,
        Terrain: planet.terrain,
        Population: planet.population,
        Climate: planet.climate,
        Residents: this.fetchResidents(planet.residents)
      }
    }))
    .then(newPlanet =>
      this.setState({
        planets: newPlanet
      })
    )
  }

  fetchResidents(residentsArray) {
    const newResidents = []
    const unresolvedResidents = residentsArray.map((url)=>{
      return fetch(url)
      .then(data => data.json())
    })
      Promise.all(unresolvedResidents)
      .then(resident => {
        return resident.map((person, index) => {

          return newResidents.push(person.name+", ")

        })
      })
      return newResidents
  }

  fetchVehicleData(string) {
    fetch(`https://swapi.co/api/vehicles/`)
      .then(data => data.json())
      .then(data => (data.results).map((vehicle)=>{
        return {
          Name: vehicle.name,
          Model: vehicle.model,
          Class: vehicle.vehicle_class,
          Passengers: vehicle.passengers
        }
        }))
      .then(data => {
        this.setState({
          vehicles: data
        })
      })
  }

  getFavorites() {

    this.setState({
       dataArray: this.state.favorite,
       displayPage: 'loaded'
     })

    console.log(this.state.favorite)
  }



  getCategoryData(category) {
    fetch(`https://swapi.co/api/${category}/`)
     .then(response => response.json())
     .then(response => {
       if (category === 'people') {
         return this.state.people
       } else if (category === 'planets') {
         return this.state.planets
       } else if (category === 'vehicles'){
         return this.state.vehicles
       }
     })
     .then(response =>  this.setState({
                          dataArray: response,
                          displayPage: 'loaded'
                        }))
     .catch(error => this.setState({
                          displayPage: 'loading'
                        }))
  }

  render() {

    return (
      <div>
        <div>
          < Header openText =  { this.state.openingText } />
        < Nav getCategoryData = { this.getCategoryData } getFavorites={this.getFavorites}  />

          { this.state.displayPage === 'initial' &&
            <h2 className='select-category'>Please Select a Category</h2>
          }

          { this.state.displayPage === 'loaded' &&
            <Container categoryData={ this.state.dataArray } setFavoriteState={ this.setFavoriteState.bind(this) } />
          }

          { this.state.displayPage === 'loading' &&
            <h2 className='select-category'>Loading your request...</h2>
          }
        </div>
      </div>
    );
  }
}
