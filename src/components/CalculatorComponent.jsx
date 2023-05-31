import React, { Component } from 'react';

export default class CalculatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
    };
  }

  handleOnChangeSum1 = (event) => {
    this.setState({
      num1: parseInt(event.target.value),
    });
  };

  handleOnChangeSum2 = (event) => {
    this.setState({
      num2: parseInt(event.target.value),
    });
  };

  handleCalculateSum() {
    let sum = this.state.num1 + this.state.num2;
    alert(`Sum of: ${this.state.num1} and ${this.state.num2} is: ${sum}`);
  }

  render() {
    return (
      <div>
        <form>
          <h2>Demo Calculation App</h2>
          <br />
          <table>
            <tr>
              <td>Number 1</td>
              <td>
                <input type="number" value={this.state.num1} onChange={(event) => this.handleOnChangeSum1(event)} />
              </td>
            </tr>
            <tr>
              <td>Number 2</td>
              <td>
                <input type="number" value={this.state.num2} onChange={(event) => this.handleOnChangeSum2(event)} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button onClick={() => this.handleCalculateSum()}>Sum</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
