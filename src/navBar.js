import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (
        <div class="w3-top">
       <div class="w3-bar w3-black w3-card w3-left-align w3-large floatRight">
         <a href="./Home.js.#home" class="w3-bar-item w3-button w3-padding-large w3-hover-white">Home</a>
         <a href="./About.js.#about" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">About</a>
         <a href="./Calculator.js.#calculator" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Predictor</a>
       </div>
       </div>
       );
       }
    }
       export default NavBar;
    
