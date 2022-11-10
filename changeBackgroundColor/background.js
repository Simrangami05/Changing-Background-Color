const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = [
  "red",
  "yellow",
  "blue",
  "green",
  "purple",
  "pink",
  "black",
  "white",
  "skyblue",
  "darkolivegreen",
];

body.style.backgroundColor = "orange";
button.addEventListener("click", changeBackground);

function changeBackground() {
  const colorChange = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorChange];
}
