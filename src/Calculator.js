import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';

class Calculator extends Component {
  render() {
    return (
        <div id="calculator" class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
       <div class="w3-content">
       <h1>Loan Predictor</h1>
           <Form/> 
       </div>
     
     </div>
    
       );
       }
    }
       export default Calculator;
    