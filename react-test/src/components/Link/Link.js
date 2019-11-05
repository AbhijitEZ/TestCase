import React, { Component } from "react";
import "./Link.css";
class Link extends Component {
  state = {
    clicked: false,

    todos: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicked !== this.state.clicked) {
      this.fetchData();
    }
  }
  fetchData = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(response => response.json())
        .then(json => {
          console.log(json, "json");
          this.setState({ todos: json.map(todo => todo.title) });
        });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="btn-grp">
        <button onClick={() => this.setState({ clicked: true })}>
          {this.props.children}
        </button>
        {this.state.clicked && <p>Data is fetched</p>}
      </div>
    );
  }
}

export default Link;
