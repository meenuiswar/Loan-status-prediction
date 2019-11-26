
import React, { Component } from 'react';
import './Form.css';
import './App.css';
import Result from './Result.js';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        name: '',
        co_name: '',
        income: '',
        co_income: ''
      };
    this.triggerResult = this.triggerResult.bind(this);
    this.callApi = this.callApi.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  triggerResult(res) {

    this.result.setResult(res);

  }

  callApi() {
    var income = this.state.income;
    var co_income = this.state.co_income;
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = "https://loan-status-api.herokuapp.com/calculate?ApplicantIncome=" + income + "&CoapplicantIncome=" + co_income;

    console.log(targetUrl);
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(
        (result) => {

          this.triggerResult(JSON.stringify(result)[1]);
        },
        (error) => {
          alert('error');
        }
      );
  }

  handleSubmit(event) {
    console.log('submit');
    this.callApi();

  }

  render() {

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div class="w3-half w3-left">
            <div class="form-style-8">
              <h2>Give Your Details</h2>

              <input type="text" name="name" placeholder=" Name" onChange={(e) => this.handleChange(e)} /><hr />
              <input type="text" name="income" placeholder=" Income" onChange={(e) => this.handleChange(e)} /><hr />
              <input type="text" name="co_name" placeholder=" Co-Applicant Name" onChange={(e) => this.handleChange(e)} /><hr />
              <input type="text" name="co_income" placeholder=" Co-Applicant Income" onChange={(e) => this.handleChange(e)} /><hr />

              <a href="./Result.js.#result" class="w3-button w3-black w3-padding-large w3-large w3-margin-top" onClick={(e) => this.handleSubmit(e)}>Predict Chance</a>

            </div>
          </div>
        </form>
        <div class="w3-half w3-right">
          <div class="form-style-8">
            <Result ref={result => this.result = result} text='Status' />
          </div>
        </div>
      </div>
    );
  }
}
export default Form;



