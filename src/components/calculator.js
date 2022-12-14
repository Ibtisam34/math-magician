import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handler = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <div className="calculator">
      <div className="display">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <div className="button-panel">
        <button type="button" onClick={handler} className="orange">AC</button>
        <button type="button" onClick={handler} className="orange">+/-</button>
        <button type="button" onClick={handler} className="black">%</button>
        <button type="button" onClick={handler} className="orange">1</button>
        <button type="button" onClick={handler} className="orange">6</button>
        <button type="button" onClick={handler} className="black">+</button>
        <button type="button" onClick={handler} className="orange">2</button>
        <button type="button" onClick={handler} className="orange">7</button>
        <button type="button" onClick={handler} className="black">-</button>
        <button type="button" onClick={handler} className="orange">3</button>
        <button type="button" onClick={handler} className="orange">8</button>
        <button type="button" onClick={handler} className="black">x</button>
        <button type="button" onClick={handler} className="orange">4</button>
        <button type="button" onClick={handler} className="orange">9</button>
        <button type="button" onClick={handler} className="black">÷</button>
        <button type="button" onClick={handler} className="orange">5</button>
        <button type="button" onClick={handler} className="orange" id="zero">0</button>
        <button type="button" onClick={handler} className="black">.</button>
        <button type="button" onClick={handler} className="grey">=</button>
      </div>
    </div>
  );
};

export default Calculator;
