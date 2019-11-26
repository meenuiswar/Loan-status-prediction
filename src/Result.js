import React, { Component } from 'react';
import './App.css';

class Quote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: -1,
      text: this.props.text
    };
  }
  setResult(res) {
    if (this.state.result != res) {
      this.setState({ result: res });

      this.setResultText();
    }
  }

  setResultText() {
    if (this.state.result == 0)
      this.setState({ text: "Sorry!!! Your Loan is less likely to be approved!!" });

    else if (this.state.result == 1)
      this.setState({ text: "Congratss!!! Your loan is likely to be approved!!" });

    else if (this.state.result == 2) {
      alert('kooi');
      this.setState({ text: "Waiting..." });
    }

    else
      this.setState({ text: "Status" });
  }
  render() {
    return (
      <div id="result" class="w3-container w3-black w3-center w3-padding-64">
        <h1 class="w3-margin w3-xlarge">{this.state.text}</h1>
      </div>

    );
  }
}
export default Quote;
