import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class WeatherForm extends Component {
  render() {
    return(
      <div className={this.props.flexDirection}>
        <input type="text" placeholder="Chattanooga, Tennessee" />
        <button type="button" className="btn-primary">Get Weather</button>
      </div>
    )
  }
}

export default WeatherForm;

WeatherForm.propTypes = {
  flexDirection: PropTypes.string.isRequired,
}

