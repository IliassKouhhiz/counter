let value = document.querySelector(".output p");
let dec = document.getElementById("decrease");
let inc = document.getElementById("increase");
let dec_10 = document.getElementById("decrease_10");
let inc_10 = document.getElementById("increase_10");
let reset = document.getElementById("reset");
let save = document.getElementById("save");
let memory = document.querySelector(".memory p");
let i = 0;
let saved = [];

inc.addEventListener("click", increase);
dec.addEventListener("click", decrease);
inc_10.addEventListener("click", increase10);
dec_10.addEventListener("click", decrease10);
reset.addEventListener("click", resetCounter);
save.addEventListener("click", saveResult);

function increase() {
  i++;
  displayResult();
}

function decrease() {
  i--;
  displayResult();
}

function increase10() {
  i = i + 10;
  displayResult();
}

function decrease10() {
  i = i - 10;
  displayResult();
}

function displayResult() {
  value.innerHTML = i;
}

function resetCounter() {
  i = 0;
  saved = [];
  value.innerHTML = 0;
  memory.innerHTML = "";
}

let text = "";
function saveResult() {
  saved.push(value.innerHTML);
  saved.forEach(displayMemory);
  memory.innerHTML = text;
  text = "";
}

function displayMemory(value) {
  text += value + ", ";
}
