// jshint esversion: 6

let arrEvens = [1, 6, 12, 18];

let sumEvens = arrEvens => {
  let sum = 0;
  for (let x in arrEvens) {
  }
  for (let i = 0; i < arrEvens.length; i++) {
    if (i % 2 == 0) {
      sum = sum + arrEvens[i];
    }
  }
  return sum;
};

console.log(sumEvens(arrEvens));

//Sum evens
