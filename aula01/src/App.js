import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Grafo from './BuscaEmProfundidade/Grafo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pascoal sabe menos ainda agora</h1>
        <Grafo />
      </div>
    );
  }
}

export default App;
