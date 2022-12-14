import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="calc-container" className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default calculator;
