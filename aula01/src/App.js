import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Grafo from './BuscaEmProfundidade/Grafo';
import { symlinkSync } from 'fs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Inteligência Computacional 1</h1>
        <Grafo />
      </div>
    );
  }
}

export default App;
