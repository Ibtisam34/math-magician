/* eslint-disable no-restricted-globals */
import operate from './operate';

const calculate = (calculator, buttonName) => {
  const operations = ['+', '-', 'X', '÷'];

  let { total, next, operation } = calculator;

  if (buttonName === '+/-') {
    if (next) {
      next = (+next * -1).toString();
    }
    if (total && total !== 'NaN' && !next) {
      total = (+total * -1).toString();
    }
  }

  if (buttonName === '%') {
    if (next) {
      next = operate(null, next, buttonName);
    } else if (!isNaN(total)) {
      total = operate(null, next, buttonName);
    }
  }

  if (buttonName === '=') {
    if (total === 'NaN' && next && operation) {
      return { total: 'NaN', next: null, operation: null };
    }

    if (next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    if (total === 'NaN' && next && operation) {
      return { total: 'NaN', next: null, operation: buttonName };
    }

    if (total && next && operation) {
      total = operate(total, next, buttonName);
      next = null;
    }

    operation = buttonName;
  }

  if (buttonName === '.') {
    if (total && !isNaN(total) && !total.split('').includes('.')) {
      total = `${total}.`;
    }
    if (next && !next.split('').includes('.')) {
      next = `${next}.`;
    }
    if (!next && operation && total !== 'NaN') {
      next = '0.';
    }
  }

  if (buttonName === 'AC') {
    total = '0';
    next = null;
    operation = null;
  }

  if (!isNaN(Number(buttonName)) && (total !== '0' && total !== 'NaN') && !operation) {
    total += buttonName;
  }

  if (!isNaN(Number(buttonName)) && total === '0' && !operation) {
    total = buttonName;
  }

  if (!isNaN(Number(buttonName)) && operation && next !== null) {
    next += buttonName;
  }

  if (!isNaN(Number(buttonName)) && operation && next === null) {
    next = buttonName;
  }

  if (total === 'NaN' && !isNaN(buttonName) && !operation) {
    total = buttonName;
  }

  return { total, next, operation };
};

export default calculate;
