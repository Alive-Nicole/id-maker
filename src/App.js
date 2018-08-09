import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Let's make an ID!</h1>
        </header>
        <div className="App-form">
          <Form />
          <Card />
        </div>
        
      </div>
    );
  }
}

export default App;
