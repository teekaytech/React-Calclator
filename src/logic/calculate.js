import Operate from './operate';

const calculate = (calculator, buttonName) => {
  const { total, next } = calculator;
  const { operation } = calculator;
  const calcResult = {};
  if (buttonName === '+/-') {
    if (total) {
      calcResult.total *= -1;
    }
    if (next) {
      calcResult.next *= -1;
    }
  }

  if (
    buttonName === '+'
    || buttonName === '-'
    || buttonName === '*'
    || buttonName === '%'
    || buttonName === '÷'
  ) {
    return Operate(total, next, operation);
  }
  return calcResult;
};

export default calculate;
