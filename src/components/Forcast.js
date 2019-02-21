import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import queryString from 'query-string';
import Loading from './Loading';
import '../App.css';

class Forcast extends Component {
  constructor(props) {
    super();
    this.state = {
      fiveDayForcast: null
    };
  }

  componentDidMount() {
    var city = queryString.parse(this.props.location.search)['city']
    var apiKey = '1473773a78bb97f2960711c8392c2d7e'
    var weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${apiKey}`

    var fiveDayForcast = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${apiKey}&cnt=5`

      axios.get(weather).then(res => {
        const forcast = res.data;
        console.log(forcast)
      })

      axios.get(fiveDayForcast).then(res => {
        const fiveDayForcast = res.data;
        this.setState({ fiveDayForcast });
        console.log(this.state)
      })
  }

  render() {
    return(
      <div>
        {!this.state.fiveDayForcast
          ? <Loading />
          : <h1>Forcast</h1>}
      </div>
    )
  }
}

export default Forcast;
