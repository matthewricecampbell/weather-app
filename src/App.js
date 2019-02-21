import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header row">
            <h2>Weather Time!</h2>
            <div className="row">
							<input type="text" placeholder="Chattanooga, Tennessee" />
							<button type="button" className="btn-primary">Get Weather</button>
            </div>
          </div>
        <header className="App-hero">
          <h1>
            Enter a City and State
          </h1>
          <input type="text" placeholder="Chattanooga, Tennessee" />
          <button type="button" className="btn-primary">Get Weather</button>
        </header>
      </div>
    );
  }
}

export default App;
