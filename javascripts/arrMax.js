// // jshint esversion: 6

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
