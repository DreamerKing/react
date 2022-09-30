import React, { Component } from 'react';

function WarningBanner(props) {
  if (!props.warn) return null;
  return (
    <div className="warning">Warning</div>
  )
}

export default class RenderNull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warn: false
    }
  }

  handleToggle = () => {
    this.setState(state => ({ warn: !state.warn }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.warn} />
        <button onClick={this.handleToggle}>{this.state.warn ? 'Hide' : 'Show'}</button>
      </div>
    )
  }
}