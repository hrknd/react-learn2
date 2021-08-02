import React, { Component } from 'react';

// function App() {
//   return (
//     <h1>Helo</h1>
//   );
// }

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <label htmlFor="foo">bar</label>
        <input type="text" onChange={() => {console.log("changed")}} />
      </React.Fragment>
    );
  }
}


export default App;
