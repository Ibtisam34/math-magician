import calculate from '../logic/calculate';

describe('calculate', () => {
  test('check AC button', () => {
    const state = { total: 0, operation: null, next: null };
    const button = 'AC';
    expect(calculate(state, button)).toEqual({ total: null, operation: null, next: null });
  });
  test('check +/- button', () => {
    const state = { total: '5', operation: null, next: null };
    const button = '+/-';
    expect(calculate(state, button)).toEqual({ total: '-5', operation: null, next: null });
  });
  test('if total and operation are null', () => {
    const state = {
      total: null,
      next: '0',
      operation: null,
    };
    const button = '0';
    const response = calculate(state, button);
    expect(response).toEqual({});
  });
});
