import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p>Ingredientes</p>
          <h1>Risotto de setas</h1>
        </header>
        <main className= "app_main">
          <div className= "auto-selector">
            <p>Seleccionar todo | </p>
            <p>Deseleccionar todo</p>
          </div>
          <ul className="ingredients-list">
            <li className="list-item">
              <div className="ingredients-info">
                  <input className="ingredient-select" type="checkbox"></input>
                  <input className="ingredient-quantity" type="text"></input>
                  <div className ="item-label">
                    <h2>Arroz</h2>
                    <p>Marca</p>
                    <p>x Kg</p>
                  </div>
                </div>
                <div className="item-price"> 1,20
                </div>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
