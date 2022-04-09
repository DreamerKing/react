import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Todo.css';

class TodoList extends Component {
    render() {
        console.log(this.props, 'list')
        return (
            <ul>
                { this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            // text: ''
        }));
    }

    render() {
        return (
            <div>
                <h3>Todo</h3>
                <div className="board">
                    <TodoList className="list" items={this.state.items} />
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label htmlFor="new-todo">What needs to be done?</label>
                        <input id="new-todo" onChange={this.handleChange} value={this.state.text} />
                        <button type="submit"> Add #{this.state.items.length + 1}</button>
                    </form>
                </div>
            </div>
        )
    }
}