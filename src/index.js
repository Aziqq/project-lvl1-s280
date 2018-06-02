import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (gameDescription, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const iter = (currentRound) => {
    if (currentRound === roundsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }

    const [question, rightAnswer] = task();

    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    if (actualAnswer === rightAnswer) {
      console.log('Correct!');
      iter(currentRound + 1);
    } else {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${playerName}!`);
    }
  };
  iter(0);
};
