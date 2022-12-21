import operate from '../logic/operate';

describe('it performs binary operation to data with operation parameter', () => {
  test('when operation is "+"', () => {
    expect(operate(0, 5, '+')).toBe('5');
  });

  test('when operation is "-"', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  test('when operation is "x"', () => {
    expect(operate(5, 2, 'x')).toBe('10');
  });

  test('when operation is "÷"', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  test('when operation is "%"', () => {
    expect(operate(10, 2, '%')).toBe('0');
  });
});
