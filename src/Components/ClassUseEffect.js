import React, { Component } from "react";

class ClassUseEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Cliked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document titile");
      document.title = `Cliked ${this.state.count} times`;
    }
  }

  render() {
    const { count, name } = this.state;
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click {count} times with class
        </button>
      </div>
    );
  }
}

export default ClassUseEffect;
