import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const gameEven = (name, acc) => {
  if (acc === 0) {
    return console.log(`Congratulations, ${name}!`);
  }
  const randomNum = Math.floor(100 * Math.random());
  console.log(`Question: ${randomNum}`);
  const actualAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  if (actualAnswer === correctAnswer) {
    console.log('Correct!');
    gameEven(name, acc - 1);
  } else {
    console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  return null;
};
