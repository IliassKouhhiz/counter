let value = document.querySelector(".output p");
let container = document.querySelector(".container");
let output = document.querySelector(".output");
let reset = document.querySelector(".reset-save:nth-of-type(1)");
let save = document.querySelector(".reset-save:nth-of-type(2)");
let memory = document.querySelector(".memory p");
let i = 0;
let saved = [];
let text = "";

const createButton = (elemAttributes, elemTxt, elemName, operator, amount) => {
  const button = document.createElement("button");

  for (key in elemAttributes) {
    button.setAttribute(key, elemAttributes[key]);
  }
  button.innerHTML = elemTxt;

  changeValue = function () {
    i = operator === "increase" ? i + amount : i - amount;
    displayResult();
  };
  resetCounter = function () {
    i = 0;
    saved = [];
    value.innerHTML = 0;
    memory.innerHTML = "";
  };
  saveResult = function () {
    saved.push(value.innerHTML);
    saved.forEach(displayMemory);
    memory.innerHTML = text;
    text = "";
  };

  elemName === "reset"
    ? button.addEventListener("click", this.resetCounter)
    : elemName === "save"
    ? button.addEventListener("click", this.saveResult)
    : button.addEventListener("click", this.changeValue);

  return button;
};

function displayResult() {
  value.innerHTML = i;
}
function displayMemory(value) {
  text += value + ", ";
}

const decreaseByOneUnit = createButton(
  { class: "btn btn-primary btn-lg", id: "decrease", type: "button" },
  "-",
  "decrease by one",
  "decrease",
  1
);
const decreaseByTenUnits = createButton(
  { class: "btn btn-primary btn-lg", id: "decrease_10", type: "button" },
  "-10",
  "decrease by ten",
  "decrease",
  10
);
const increaseByOneUnit = createButton(
  { class: "btn btn-danger btn-lg", id: "increase", type: "button" },
  "+",
  "increase by one",
  "increase",
  1
);
const increaseByTenUnits = createButton(
  { class: "btn btn-danger btn-lg", id: "increase_10", type: "button" },
  "+10",
  "increase by ten",
  "increase",
  10
);

const resetButton = createButton(
  { class: "btn btn-success btn-lg", id: "reset", type: "button" },
  "Reset",
  "reset"
);
const saveButton = createButton(
  { class: "btn btn-warning btn-lg", id: "save", type: "button" },
  "Save",
  "save"
);

output.before(decreaseByTenUnits);
output.before(decreaseByOneUnit);
output.after(increaseByTenUnits);
output.after(increaseByOneUnit);

reset.appendChild(resetButton);
save.appendChild(saveButton);
