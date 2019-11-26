import React, { Component } from 'react';
import Navbar from './navBar.js';
import HomePage from './Home.js';
import About from './About.js';
import Result from './Result.js';
import Calculator from './Calculator.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
        <About />
        <Calculator />
        <Result text='Quote: Live Life!' />
      </div>
    );
  }
}

export default App;
