import playGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'What number is missing in this progression?';

const progressionCount = 10;

const getProgression = () => {
  const step = getRandomNum(1, 5);
  const firstNum = getRandomNum(1, 20);
  const progression = [firstNum];
  while (progression.length < progressionCount) {
    progression.push(firstNum + (step * progression.length));
  }
  return progression;
};

const task = () => {
  const progression = getProgression();
  const indexOfAnswer = getRandomNum(0, (progression.length - 1));
  const rightAnswer = String(progression[indexOfAnswer]);
  progression[indexOfAnswer] = '..';
  const question = progression.reduce((a, b) => `${a} ${b}`, '');
  return [question, rightAnswer];
};

export default () => playGame(gameDescription, task);
