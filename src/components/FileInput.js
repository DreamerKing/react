import React, { Component, createRef } from 'react';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.fileInput = createRef();
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.fileInput.current.files);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Upload:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}