import { Component } from 'react';

class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="https://www.clipartkey.com/mpngs/m/128-1288930_cute-cat-emote-png-clipart-png-download-cute.png"
                style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: 60 }} />
        )
    }
}

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX, y: e.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
                {/* {this.props.children(this.state)} */}
            </div>
        )
    }
}

export default class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h2>The mouse tracker</h2>
                <Mouse render={mouse => <Cat mouse={mouse} />} />
                {/* <Mouse>
                    {mouse => <Cat mouse={mouse} />}
                </Mouse> */}
            </div>
        )
    }
}