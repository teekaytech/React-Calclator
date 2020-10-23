import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  let result = null;
  const n1 = Big(numberOne);
  const n2 = Big(numberTwo);
  switch (operation) {
    case '-':
      result = n1.minus(n2);
      break;
    case '+':
      result = n1.plus(n2);
      break;
    case '*':
      result = n1.times(n2);
      break;
    case '/':
      result = n1.div(n2);
      break;
    case '%':
      result = n1.div(100);
      break;
    default:
      break;
  }
  return result;
};

export default Operate;
