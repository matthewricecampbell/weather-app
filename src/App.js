import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import WeatherForm from './components/WeatherForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Weather Time!</h2>
          <div className="row">
            <WeatherForm flexDirection={'row'}/>
          </div>
        </div>
        <Home/>
      </div>
    );
  }
}

export default App;
