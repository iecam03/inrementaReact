import React, { Component } from "react";
class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  render() {
    return (
      <div
        onClick={() =>
          this.setState({
            title: "Hola mundo",
          })
        }
      >
        <div>The title is: {`${this.state.title}`}</div>
      </div>
    );
  }
}
export default Accordion;