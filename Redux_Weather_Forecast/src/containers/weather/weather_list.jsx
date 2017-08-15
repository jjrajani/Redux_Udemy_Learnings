import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/chart';
import GoogleMap from '../../components/google_map';

/* F° */
const kelvinToFahrenheit = function(temp) { return (temp * (9/5) - 459.67); }
/* inHg */
const hectopascalToInMG = function(pressure) { return 0.02952998751 * pressure; }

class WeatherList extends Component {
  renderWeather(cityData, i) {
    const temps = cityData.list.map(w => kelvinToFahrenheit(w.main.temp));
    const pressures = cityData.list.map(w => hectopascalToInMG(w.main.pressure));
    const humidities = cityData.list.map(w => w.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={cityData.city.name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart color="orange" data={temps} unit="F°"/></td>
        <td><Chart color="purple" data={pressures} unit="inHG"/></td>
        <td><Chart color="blue" data={humidities} unit="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F°)</th>
            <th>Pressure (inHg)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
