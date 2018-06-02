import playGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const task = () => {
  const question = getRandomNum(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => playGame(gameDescription, task);
