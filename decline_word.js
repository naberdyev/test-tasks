const words = ["компьютер", "компьютера", "компьютеров"];

function declineWord(number) {
  const remainder = Math.abs(number % 10);
  switch (remainder) {
    case 1:
      return number === 11 ? `${number} ${words[2]}` : `${number} ${words[0]}`;
    case 2:
    case 3:
    case 4:
      return number > 4 && number < 15
        ? `${number} ${words[2]}`
        : `${number} ${words[1]}`;
    default:
      return `${number} ${words[2]}`;
  }
}

const test = (border) => {
  for (let i = 0; i < border; i++) {
    console.log(declineWord(i));
  }
};

test(38);
//time spent on solving task - 5 min
