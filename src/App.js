import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
     counter:  0
  }
  clickHand = ()=>{
    var oldCount = this.state.counter;
    const newCount = oldCount + 1; 
    this.setState({counter:newCount});
  }
    render() {
    return(
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.clickHand}>Incrementa</button>
      </div>
    );
  }
}

export default App;
