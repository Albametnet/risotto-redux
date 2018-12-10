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
              <div className="ingredient">
                <div className="ingredient-info">
                  <input className="ingredient-select" type="checkbox"></input>
                  <input className="ingredient-quantity" type="text"></input>
                  
                    <h2>Arroz</h2>
                    <p>Marca</p>
                    <p>x Kg</p>
                  
                </div>
                  <div className="item-price"> 1,20
                  </div>
                </div>
            </li>
          </ul>
          <div className="checkout-info">
            <p>Items: x</p>
            <p>Subtotal :</p>
            <p>Gastos de envío :</p>
            <p>Total :</p>
          </div>
          <button className="checkout-button"> Comprar Ingredientes : xxx </button>
        </main>
      </div>
    );
  }
}

export default App;
