// iterative method

// const fibs = (number) => {
//   if (number <= 1) return [0];

//   if (number == 2) return [0, 1];

//   const ans = [0, 1];

//   for (let i = 3; i <= number; i++) {
//     ans.push(ans[i - 2] + ans[i - 3]);
//   }
//   return ans;
// };

// recursive method

const fibnum = (number) => {
  if (number <= 1) return 0;
  if (number == 2) return 1;

  return fibnum(number - 1) + fibnum(number - 2);
};

const fibs = (number) => {
  if (number <= 1) return [0];

  return fibs(number - 1).concat(fibnum(number));
};

console.log(fibs(1));
console.log(fibs(2));

console.log(fibs(8));
