function roundToFive(number) {
  const remainder = number % 5;
  const roundedNumber =
    remainder > 2.5 ? number - remainder + 5 : number - remainder;
  return roundedNumber;
}

const numbersToRound = [27, 27.8, 41.7, 23];
numbersToRound.forEach((number) => {
  console.log(`${number} => ${roundToFive(number)}`);
});

// time spent solving this task - 2 minutes
