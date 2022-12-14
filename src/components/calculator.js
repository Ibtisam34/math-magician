import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          {total}
          {operation}
          {next}
        </div>
        <div className="button-panel">
          <button type="button" onClick={this.handler} className="orange">AC</button>
          <button type="button" onClick={this.handler} className="orange">+/-</button>
          <button type="button" onClick={this.handler} className="black">%</button>
          <button type="button" onClick={this.handler} className="orange">1</button>
          <button type="button" onClick={this.handler} className="orange">6</button>
          <button type="button" onClick={this.handler} className="black">+</button>
          <button type="button" onClick={this.handler} className="orange">2</button>
          <button type="button" onClick={this.handler} className="orange">7</button>
          <button type="button" onClick={this.handler} className="black">-</button>
          <button type="button" onClick={this.handler} className="orange">3</button>
          <button type="button" onClick={this.handler} className="orange">8</button>
          <button type="button" onClick={this.handler} className="black">x</button>
          <button type="button" onClick={this.handler} className="orange">4</button>
          <button type="button" onClick={this.handler} className="orange">9</button>
          <button type="button" onClick={this.handler} className="black">÷</button>
          <button type="button" onClick={this.handler} className="orange">5</button>
          <button type="button" onClick={this.handler} className="orange" id="zero">0</button>
          <button type="button" onClick={this.handler} className="black">.</button>
          <button type="button" onClick={this.handler} className="grey">=</button>
        </div>
      </div>
    );
  }
}
