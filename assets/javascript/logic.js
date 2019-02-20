// variable to display who's turn it is
let displayTurn = document.getElementById("turn");
// Variable to hold chosen person
let chosen = "";
let tada = new Audio("assets/sound/Ta Da-SoundBible.com-1884170640.mp3");

// ========= On-Click call choose function ==========
document.addEventListener("click", event => {
  // if the click event isn't on the "start" element, then do nothing
  if (!event.target.matches("#start")) return;
  event.preventDefault();
  // otherwise call the function after 4 seconds
  setTimeout(choose, 2000);
});

// ========== Reset with a reset button ================
document.addEventListener("click", event => {
  // if the click event isn't on the "reset" element, then do nothing
  if (!event.target.matches("#reset")) return;
  event.preventDefault();
  // otherwise reset clear turn element
  chosen = "";
  displayTurn.innerHTML = chosen;
});

// ========= Random chooser ===========
const choose = () => {
  // Randomly choose between 1 and 10 both inclusive as defined in above variable
  ranNum = Math.random() * (10 - 1 + 1) + 1;
  console.log(ranNum);
  
  // if ranNum is less than or equal to 5, then it's Harrison's turn
  if (ranNum <= 5) {
    chosen = "Harrison";
  } else chosen = "Reese"; // otherwise, it's Reese's turn
  
  // Animates display of name
  displayTurn.classList.add("pre-animate");
  setTimeout (() => {
    displayTurn.classList.remove("pre-animate")
  }, 500);
  
  // and chosen gets displayed
  displayTurn.innerHTML = chosen; 

  // Tada sound plays when the person is chosen
  tada.play();
  
// Display animation for 4 sec
  // Hide animation
};
