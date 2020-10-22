import Operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next } = calculator;
  const { operation } = calculator;
  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
    Operate(total, next, operation);
  }

  if (
    buttonName === '+'
    || buttonName === '-'
    || buttonName === '*'
    || buttonName === '%'
    || buttonName === '÷'
  ) {
    total = Operate(total, next, operation);
  }

  return calculator;
};

export default calculate;
