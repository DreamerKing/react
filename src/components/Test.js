import React, { Component } from 'react';

export default class Test extends Component {
    constructor(props) {
        super(props);
        console.log(this.props, props)
        console.log(this);
    }
    render() {
        return <div>Test {this.props.name}</div>
    }
}