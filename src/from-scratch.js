const loop0UpTo10 = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};

// tests

// loop0UpTo10();

const loop5to10 = () => {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
};

// tests

// loop5to10()

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10; i += 2) {
    console.log(i);
  }
};

// tests

// loopEvenNumbersUpTo10();

const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }
};

// tests

// countdown5to0();

const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
};

// tests

// loopUpToNum(5)
// loopUpToNum(0)
// loopUpToNum(-7)

const fizzbuzz = () => {
};

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
