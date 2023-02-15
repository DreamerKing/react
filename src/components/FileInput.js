import React, { Component, createRef } from 'react';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.fileInput = createRef();
    this.btnRef = createRef();
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.fileInput);
    console.log(this.fileInput.current.files);
  }

  handleClick = () => {
    console.log(this.btnRef);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Upload:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit" onClick={this.handleClick} ref={this.btnRef}>Submit</button>
      </form>
    )
  }
}