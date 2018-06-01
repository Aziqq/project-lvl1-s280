import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const isEven = num => num % 2 === 0;
const roundsCount = 3;
const getRandomNum = () => Math.floor(100 * Math.random());

export const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const iter = (currentRound) => {
    if (currentRound === roundsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const question = getRandomNum();
    const rightAnswer = isEven(getRandomNum()) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    if (actualAnswer === rightAnswer) {
      console.log('Correct!');
      iter(currentRound + 1);
    } else {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  };
  iter(0);
};
