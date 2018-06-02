import playGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const task = () => {
  const num = getRandomNum(2, 200);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, task);
