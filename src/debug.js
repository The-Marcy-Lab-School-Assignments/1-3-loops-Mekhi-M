const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i ++) {
    result += i;
  }
  return result;
};

// tests

// console.log(brokenLoop(1, 10))
// console.log(brokenLoop(5, 12))
// console.log(brokenLoop(0, 0))
// console.log(brokenLoop(0, -1))

const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      result += `-${i}${j}`;
    }
  }
  return result.slice(1);
};

console.log(brokenNested())

module.exports = {
  brokenLoop,
  brokenNested,
};
