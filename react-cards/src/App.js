import React, { Component } from 'react';
import './App.css';




class App extends Component {

handleFlip() {
 
}





  render() {
    return (
      <div className='App'>
        
        <button onClick = {(e) => this.handleFlip(e)}>Flip Me</button>
      </div>
    );
  }
}

export default App;
