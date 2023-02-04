function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; Math.pow(i, 2) <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

const test = (border) => {
  for (let i = 0; i < border; i++) {
    console.log(`Number ${i} is ${isPrime(i) ? "prime" : "not prime"}.`);
  }
};

test(40);

//time spent on solving task - 5 min
