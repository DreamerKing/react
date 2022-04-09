import React, { Component } from 'react';
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('proot');

class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return (
            createPortal(
                this.props.children,
                this.el
            )
        )
    }
}

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            clicks: state.clicks + 1
        }));
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks: {this.state.clicks}</p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        )
    }

}


function Child() {
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
}
