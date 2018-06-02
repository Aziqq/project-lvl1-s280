import playGame from '../';
import getRandomNum from '../utils';

const gameDescription = 'What is the result of the expression?';

export default () => {
  const task = () => {
    const num1 = getRandomNum(1, 10);
    const num2 = getRandomNum(1, 10);
    switch (getRandomNum(1, 3)) {
      case 1:
        return [`${num1} + ${num2}`, `${num1 + num2}`];
      case 2:
        return [`${num1} - ${num2}`, `${num1 - num2}`];
      default:
        return [`${num1} * ${num2}`, `${num1 * num2}`];
    }
  };
  playGame(gameDescription, task);
};
