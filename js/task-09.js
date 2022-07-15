const textGetColor = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor() {
  let color = getRandomHexColor();
  document.body.setAttribute("style", `background-color: ${color}`);
  textGetColor.textContent = color;
}
