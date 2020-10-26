import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  let result = null;
  const n1 = numberOne ? Big(numberOne) : 0;
  const n2 = numberOne ? Big(numberTwo) : 0;
  switch (operation) {
    case '-':
      result = n1.minus(n2);
      break;
    case '+':
      result = n1.plus(n2);
      break;
    case 'X':
      result = n1.times(n2);
      break;
    case '÷':
      if (numberTwo === '0') {
        result = "Can't divide by 0";
        break;
      }
      result = n1.div(n2);
      break;
    default:
      break;
  }
  return result.toString();
};

export default Operate;
