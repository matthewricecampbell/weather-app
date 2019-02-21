import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import WeatherForm from './components/WeatherForm';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Forcast = () => (
  <div>
    <h2>Forcast</h2>
  </div>
)

const App = () => (
  <Router>
     <div className="App">
       <div className="App-header">
         <h2>Weather Time!</h2>
         <div className="row">
           <WeatherForm flexDirection={'row'}/>
         </div>
       </div>
      <Route exact path="/" component={Home}/>
      <Route path="/forcast" component={Forcast}/>
    </div>
  </Router>
)
export default App 
