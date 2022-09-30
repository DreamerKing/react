import React, { Component } from 'react';


const scaleNames = {
  c: "Celius",
  f: "Fahrenheit",
};

export default class Caculator extends Component {
  handleChange = (e) => {
    this.props.onTemplateChange(e.target.value);
  };
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}