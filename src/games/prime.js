import playGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const task = () => {
  const num = getRandomNum(1, 3);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, task);
