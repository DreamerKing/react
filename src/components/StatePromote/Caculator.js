import React, { Component } from 'react';
import TemplateInput from './TemplateInput';
import { BoilingVerdict } from './BoilingVerdict'
export default class Caculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0, scale: 'c' };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({ temperature, scale: 'c' });
  };

  handleFrahenheitChange = (temperature) => {
    this.setState({ temperature, scale: 'f' });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'c' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemplateInput scale='c' temperature={celsius} onTemplateChange={this.handleCelsiusChange} />
        <TemplateInput scale='f' temperature={fahrenheit} onTemplateChange={this.handleFrahenheitChange} />
        <BoilingVerdict celsius={Number.parseFloat(celsius)} />
      </div>
    )
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}


function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}