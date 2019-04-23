import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Grafo from './BuscaEmProfundidade/Grafo';
import { symlinkSync } from 'fs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='card bg-secondary'>Inteligência Computacional 1 (Abreu vc precisa mudar esta fonte)</h1>
        <Grafo title={'Grafo00'} />
      </div>
    );
  }
}

export default App;
