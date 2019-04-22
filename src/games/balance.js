import playGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Balance the given number.';

const balance = (numbers) => {
  const intArray = numbers.toString().split('').map(Number).sort();
  while (intArray[intArray.length - 1] - intArray[0] > 1) {
    intArray[intArray.length - 1] -= 1;
    intArray[0] += 1;
    intArray.sort();
  }
  return intArray.join('');
};

const task = () => {
  const question = getRandomNum(100, 10000);
  const rightAnswer = balance(question);
  return [question, rightAnswer];
};

export default () => playGame(gameDescription, task);
