/* import { useState } from 'react';

export default function TestArray() {
  const [num, setNum] = useState([1, 2, 3]);
  const handleChange = () => {
    console.log('click')
    // num.push(4);
    let anum = [...num, 4];
    setNum(anum);
  }
  return (
    <div>
      <button onClick={handleChange}>Change</button>
      <ol>{num.map((v) => (<li key={v}>{v}</li>))}</ol>
    </div>
  )
} */

import React, { Component } from 'react';

export default class TestArray extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [12, 13, 14] }
  }

  handleChange = () => {
    this.state.nums.push(15);
    this.setState({ nums: this.state.nums });
  }

  render() {
    const nums = this.state.nums;
    return (
      <div>
        <button onClick={this.handleChange}>Change</button>
        <ol>{nums.map((v) => (<li key={v}>{v}</li>))}</ol>
      </div>)
  }
}