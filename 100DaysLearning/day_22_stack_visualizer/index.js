const input = document.getElementById("input-section");
const stack_container = document.querySelector(".stack-container");
const statusValue = document.querySelector(".status");

class Stack {
  constructor() {
    this.items = [];
    this.maxSize = 10;
  }
  push(ele) {
    if (this.items.length >= this.maxSize) {
      return null;
    }
    this.items.push(ele);
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    let removeEle = this.items.pop();
    return removeEle;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  getSize() {
    return this.items.length;
  }
}
const newStack = new Stack();

const display = (flag) => {
  stack_container.innerHTML = "";

  if (newStack.isEmpty()) {
    stack_container.innerHTML = `<p class="text-gray-500 italic">Stack is empty</p>`;
    return;
  }

  // Loop in reverse order so last pushed appears on top
  for (let i = newStack.items.length - 1; i >= 0; i--) {
    // Highlight only the top element if peek() is called
    const isTop = i === newStack.items.length - 1 && flag;

    const el = document.createElement("div");
    el.className = `bg-${
      isTop ? "yellow" : "blue"
    }-600 text-white rounded p-2 w-full font-semibold text-2xl mt-1`;
    el.textContent = newStack.items[i];
    stack_container.appendChild(el);
  }
  input.value = "";
};

function showStatus(message) {
  statusValue.textContent = message;

  clearTimeout(window.statusTimer); // prevent overlap
  window.statusTimer = setTimeout(() => {
    statusValue.textContent = "";
  }, 2000);
}
const push = () => {
  console.log(newStack.getSize());
  if (newStack.getSize() < 10) {
    if (input.value) {
      newStack.push(input.value);
      showStatus(`element added ${input.value}`);
      display();
    }
  } else {
    showStatus(`Max limit is 10`);
  }
};

const pop = () => {
  let value = newStack.pop();
  display();
  if (value) showStatus(`element remove ${value}`);
  showStatus("stack is empty");
};

const peek = () => {
  let value = newStack.peek();
  display(1);
  if (value) showStatus(`Top element ${value}`);
  showStatus("stack is empty");
};
