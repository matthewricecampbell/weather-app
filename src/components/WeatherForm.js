import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../App.css';
import {
  Link
} from 'react-router-dom'

class WeatherForm extends Component {
  constructor(props) {
    super();
    this.state = {
      city: 'Chattanooga, Tennessee',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('state', this.state)
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        city: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var apiKey = '1473773a78bb97f2960711c8392c2d7e'
    var weather = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&type=accurate&APPID=${apiKey}`

    var fiveDayForcast = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},us&appid=${apiKey}&cnt=5`

      axios.get(weather).then(res => {
        const weather = res.data;
        this.setState({ weather });
        console.log(this.state)
      })

      axios.get(fiveDayForcast).then(res => {
        const fiveDayForcast = res.data;
        this.setState({ fiveDayForcast });
        console.log(this.state)
      })
  }

  render() {
    return(
      <form className={this.props.flexDirection} onSubmit={this.handleSubmit}>
        <input
          id='city'
          placeholder='Chattanooga, Tennessee'
          type='text'
          value={this.state.city}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <Link
          className='btn-primary'
          to={{
            pathname: 'forcast',
            search: `?city=${this.state.city}`
          }}
        >
          Get Weather
        </Link>
      </form>
    )
  }
}

export default WeatherForm;

WeatherForm.propTypes = {
  flexDirection: PropTypes.string.isRequired,
}

