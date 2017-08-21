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

  render() {
    return (
      <div>
        < Header />
        < Nav />
        < Container />
      </div>
    );
  }
}

// export default App;
