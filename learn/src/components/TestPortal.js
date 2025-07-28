import React, { Component, Profiler } from 'react';
import { createPortal } from 'react-dom';

const portal = document.getElementById('portal');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    portal.appendChild(this.el);
  }

  componentWillUnmount() {
    portal.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  handleClick = () => {
    this.setState(state => ({
      clicks: ++state.clicks
    })
    )
  }

  handleRender = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Click count: {this.state.clicks}</p>
        <Profiler id="portal" onRender={this.handleRender}>
          <Modal>
            <Clid />
          </Modal>
        </Profiler>
      </div>
    )
  }
}

function Clid() {
  return (
    <button>Click</button>
  )
}