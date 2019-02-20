console.log("js file is coming through");

// variable to display who's turn it is
let displayTurn = document.getElementById("turn");
let chosen = "";
// On-Click call the function
document.addEventListener("click", event => {
  // if the click event isn't on the "start" element, then do nothing
  if (!event.target.matches("#start")) return;
  event.preventDefault();
  // otherwise call the function
  choose();
});

// Random number chooser
const choose = () => {
  // Randomly choose between 1 and 10 both inclusive
  ranNum = Math.random() * (10 - 1 + 1) + 1;
  console.log(ranNum);

  // if number is less than or equal to 1, then it's Harrison's turn
  if (ranNum <= 5) {
    chosen = "Harrison";
  } else chosen = "Reese";
  displayTurn.innerHTML = chosen;
  // Set timeout of 4 sec
  // Display animation for 4 sec
  // Hide animation
};
// Display "Harrison"
// add animation
// else if number is closer to Reese then whosTurn is "Reese"
// Display "Reese"
// add animation
