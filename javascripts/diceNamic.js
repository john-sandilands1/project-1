// jshint esversion: 7

//define helper functions here
let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//Define a controller to handle the button click
let controller = function() {
  let target,
    dice1,
    die2,
    rollCount = 0,
    die1URL,
    die2URL,
    imgElem1,
    imgElem2,
    nmbRolls;
  //Get target nymber from the web page
  target = document.querySelector("input").value;
  console.log(target);
  //Roll the target number (and count rolls)
  do {
    die1 = rollDie();
    die2 = rollDie();
    rollCount++;
    console.log(`${die1} ${die2} ${rollCount}`);
    //roll the dice
    // increment roll counter

    // log dice and the counter
  } while (die1 + die2 != target);

  //update image1 on web page
  die1URL = `images/die${die1}.gif`;
  console.log(die1URL);
  imgElem1 = document.querySelector("#imgElem1");
  imgElem1.setAttribute("src", die1URL);
  //update image 2
  die2URL = `images/die${die2}.gif`;
  console.log(die2URL);
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);
  //display number of rolls on web page

  nmbRolls = `You hit your number in ${rollCount} roll${
    rollCount == 1 ? "" : "s"
  }!`;
  document.querySelector("div").innerHTML = nmbRolls;
};

//Register the controller after the DOM is complete
window.addEventListener("load", () => {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
