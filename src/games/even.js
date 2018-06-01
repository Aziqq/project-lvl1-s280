import getRandomNum from '../random-number';
import playGame from '..';

const isEven = num => num % 2 === 0;
const roundsCount = 3;

export default () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  const task = () => {
    const question = getRandomNum(1, 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return [question, rightAnswer];
  };

  playGame(gameDescription, task, roundsCount);
};
