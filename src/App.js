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



  getData(url) {
    const data = `https://swapi.co/api/${url}/`;

    fetch(data)
    .then(response => response.json())
    .then(response =>{
      console.log(response)
    })
  }





  render() {
    return (
      <div>
        < Header />
        < Nav />
        < Container />
        { this.getData()}
      </div>
    );
  }
}



// export default App;
