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
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        city: value
      }
    });
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

