import Operate from './operate';

const calculate = (calculator, buttonName) => {
  const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const ops = ['+', '-', '÷', 'X'];
  const button = buttonName.target.firstChild.data;
  let { total, next, operation } = calculator;
  if (values.includes(button) && operation === null) {
    total = total === null ? button : total + button;
  } else if (values.includes(button) && operation !== null) {
    next = next === null ? button : next + button;
  } else if (ops.includes(button) && (total !== null || total !== undefined)) {
    operation = button;
  } else if (button === '=' && total !== null && next !== null) {
    if (ops.includes(operation)) {
      total = Operate(total, next, operation);
    }
    next = null;
    operation = null;
  }

  if (button === '+/-' && (total !== null || total !== undefined)) {
    total *= -1;
    total = total.toString();
    operation = null;
  } else if (button === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (button === '%' && (total !== null || total !== undefined)) {
    total /= 100;
    total = total.toString();
    operation = null;
  }
  return { total, next, operation };
};

export default calculate;
