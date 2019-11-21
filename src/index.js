import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = ()=> {

  return (
    <div className="counter">
     
    </div>
  );
}
// Blog on event handlers
// https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//Example of this written as a class component

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Add 1
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count * 5 })}>
//           Multiply by 5
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count * 0 })}>
//           Reset
//         </button>
//       </div>
//     );
//   }
// }
