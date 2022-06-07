import { Component } from 'react';

export default class MouseTracker extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove(e) {
        this.setState({
            x: e.clientX, y: e.clientY
        })
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                <h2>Move the mouse</h2>
                <p>The current position is ({this.state.x}, {this.state.y})</p>
            </div>
        )
    }

}