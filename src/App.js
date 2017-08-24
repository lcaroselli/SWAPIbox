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
      display: 'Loading Data...',
      people: null,
      planets: null,
      vehicles: null
    }
    this.getCategoryData = this.getCategoryData.bind(this)
  }

  componentDidMount() {
    this.fetchMovieOpening()
    this.fetchPeopleData()
    this.fetchVehicleData()
    this.fetchPlanetsData()
  }

  fetchMovieOpening() {
    const movieOpeningArray =
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
          personName: person.name,
          personHomeworld: person.planet,
          homeworlPopulation: person.population
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
        planetName: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: this.fetchResidents(planet.residents)
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
      return fetch(`${url}`)
      .then(data => data.json())
    })
      Promise.all(unresolvedResidents)
      .then(resident => {
        // return resident
        newResidents.push(...resident)
      })
    return newResidents
  }

  fetchVehicleData(string) {
    fetch(`https://swapi.co/api/vehicles/`)
      .then(data => data.json())
      .then(data => (data.results).map((vehicle)=>{
        return {
          vehicleName: vehicle.name,
          model: vehicle.model,
          vehicleClass: vehicle.vehicle_class,
          passengers: vehicle.passengers
        }
        }))
      .then(data => {
        this.setState({
          vehicles: data
        })
      })
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
                          dataArray: response
                        }))
    //  .catch(error => alert('Error' + error))
  }

  render() {
    const renderCards = () => {
     if (this.state.dataArray.length > 0) {
       return <Container categoryData = { this.state.dataArray } />
     } else {
       return <h2>'Please Select a Category'</h2>
     }
   }

    return (
      <div>
        < Header openText =  { this.state.openingText } />
        < Nav getCategoryData = { this.getCategoryData } />
        { renderCards() }
      </div>
    );
  }
}
