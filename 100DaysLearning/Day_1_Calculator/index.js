const input = document.getElementById("input-section");
const buttons = document.querySelectorAll(".button-section div button");


let lastClickedEqual = false; // track if "=" was last clicked
const clear = () => {
  input.value = "0";
};

const deleteValue = () => {
  input.value = input.value.slice(0, -1);
  if (input.value === "" || input.value === "-") {
    input.value = "0";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();
    if (value === "AC") {
      clear();
      lastClickedEqual = false;
    } else if (value == "DEL") {
      deleteValue();
      lastClickedEqual = false;
    } else if (value == "=") {
      try {
        let expression = input.value.replace(/%/g, "/100");
        input.value = eval(expression);
        lastClickedEqual = true;
      } catch (error) {
        input.value = "Error";
      }
    } else {
      if (input.value === "0") {
        input.value = value;
      } else {
        input.value += value;
      }
    }
  });
});
