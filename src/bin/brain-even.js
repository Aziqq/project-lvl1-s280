#!/usr/bin/env node

import start, { gameEven } from "..";

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".')

const name = start();

gameEven(name, 3);