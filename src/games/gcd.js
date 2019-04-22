import playGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const task = () => {
  const num1 = getRandomNum(1, 50);
  const num2 = getRandomNum(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcd(num1, num2));
  return [question, rightAnswer];
};

export default () => playGame(gameDescription, task);
