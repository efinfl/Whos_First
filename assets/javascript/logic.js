console.log("js file is coming through");

// variable to display who's turn it is
let displayTurn = document.getElementById("turn");

// On-Click call the function
document.addEventListener("click", event => {
  if (!event.target.matches("#start")) return;
  event.preventDefault();
  console.log(event.target);
  choose();
});
const choose = () => {
  // variable for Harrison (min)
  let harrison = 0;
  // variable for Reese (max)
  let reese = 10;
// Randomly choose between max and min
Math.random()
// Set timeout of 4 sec
// Display animation for 4 sec
// Hide animation
};
// if number is closer to Harrison then whosTrun is "Harrison"
// Display "Harrison"
// add animation
// else if number is closer to Reese then whosTurn is "Reese"
// Display "Reese"
// add animation
