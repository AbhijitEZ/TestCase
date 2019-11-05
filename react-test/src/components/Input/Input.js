import React, { Component } from "react";

class Input extends Component {
    state = {
        name: ""
    }
    handleChange = (e) => {
        this.setState({ name: e.target.value})
    }
  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          id="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
