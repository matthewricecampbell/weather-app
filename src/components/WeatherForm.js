import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

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
    console.log(this.state.city)
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
        <button
          className='btn-primary'
          type='submit'
          disabled={!this.state.city}>
            Get Weather 
        </button>
      </form>
    )
  }
}

export default WeatherForm;

WeatherForm.propTypes = {
  flexDirection: PropTypes.string.isRequired,
}

