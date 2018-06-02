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
  const question = getRandomNum(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => playGame(gameDescription, task);
