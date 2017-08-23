import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.js"
import Nav from "./Components/Nav/Nav.js"
import Container from "./Components/Container/Container.js"


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      people: null,
      vehicles: null,
      openingText: [],
      planets: null,
    }
  }

  componentDidMount(films) {
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

  fetchPlanetsData() {
    fetch('https://swapi.co/api/planets/')
    .then(data => data.json())
    .then(data => (data.results).map((planet)=>{
      console.log('planetBefore: ', planet)
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
        console.log('newResidents: ', newResidents)
      })
    console.log('newres: ',newResidents)
    return newResidents
  }

  fetchVehicleData() {
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

  render() {
    return (
      <div>
        < Header openText =  { this.state.openingText }/>
        < Nav />
        < Container />
      </div>
    );
  }
}
