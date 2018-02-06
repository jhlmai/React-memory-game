import React from "react";
// import "./FriendCard";
// import "./App";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleReset = () => {
    // We always use the setState method to update a component's state
    
    this.setState({ count: this.state.count = 0 });
  };

  // The render method returns the JSX that should be rendered
  // render() {
  //   return (
  //     <div className="panel panel-primary">
  //       <div className="panel-heading">Click Counter!</div>
  //       <div className="panel-body text-center">
  //         <p>Click Count: {this.state.count}</p>
  //         <button className="btn btn-primary" onClick={this.handleIncrement}>
  //           Increment
  //         </button>{" "}
  //         <button className="btn btn-danger" onClick={this.handleReset}>
  //           Reset
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
}

export default Counter;
