import React, { Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // 组件未挂载前不能调用setState()
    // this.setState({ count: 1 });
  }

  handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.count}</div>
  }
}