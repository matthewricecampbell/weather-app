import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import '../App.css';

class Home extends Component {

  render() {
    return(
      <header className="App-hero">
        <h1>
          Enter a City and State
        </h1>
        <WeatherForm flexDirection={'column'}/>
      </header>
    )
  }
}

export default Home;
