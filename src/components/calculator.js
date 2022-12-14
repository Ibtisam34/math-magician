import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const newData = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: newData.total,
      next: newData.next,
      operation: newData.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="calculator-container" className="calculator">
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default calculator;
