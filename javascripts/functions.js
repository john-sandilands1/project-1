// jshint esversion: 6

let arrAvg = [5, 10, 6, 9];
var sum = 0;
for (var i = 0; i < arrAvg.length; i++) {
  sum += arrAvg[i];
}
console.log(sum / arrAvg.length);

// jshint esversion: 6

let arrMax = [6, 24, 18, 20];
var maxSoFar = 0;
arrMax.forEach(elem => {
  for (var i = 0; i < arrMax.length; i++) {
    arrMax[i];

    if (elem > maxSoFar) {
      maxSoFar = elem;
    }
  }
  console.log(maxSoFar);
});

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
