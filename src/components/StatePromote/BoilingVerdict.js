import React, { Component } from 'react';

export function BoilingVerdict(props) {
  if (props.celius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

export default class Caculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0 };
  }
  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  };
  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Temperature</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celius={parseFloat(temperature)} />
      </fieldset>
    )
  }
}