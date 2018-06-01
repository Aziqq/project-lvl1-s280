import playGame from '../';
import getRandomNum from '../random-number';

const gameDescription = 'What is the result of the expression?';
const roundsCount = 10;

export default () => {
  const task = () => {
    const getRandomOperators = () => {
      switch (getRandomNum(1, 3)) {
        case 1:
          return '+';
        case 2:
          return '-';
        default:
          return '*';
      }
    };

    const getResult = (a, b, operator) => {
      switch (operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        default:
          return a * b;
      }
    };
    const operator = getRandomOperators();
    const num1 = getRandomNum(1, 10);
    const num2 = getRandomNum(1, 10);
    const question = `${num1} ${operator} ${num2}`;
    const rightAnswer = String(getResult(num1, num2, operator));
    return [question, rightAnswer];
  };
  playGame(gameDescription, task, roundsCount);
};
