import playGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export default () => {
  const task = () => {
    const num1 = getRandomNum(1, 50);
    const num2 = getRandomNum(1, 100);
    const question = `${num1} ${num2}`;
    const rightAnswer = String(gcd(num1, num2));
    return [question, rightAnswer];
  };
  playGame(gameDescription, task);
};
