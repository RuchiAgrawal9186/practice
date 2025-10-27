class Stack {
  constructor() {
    this.items = [];
  }

  push(ele) {
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

const newStack = new Stack()
newStack.push(10)
newStack.push(20)
console.log("top element = ", newStack.peek());
newStack.push(30)
console.log("removed element = ", newStack.pop())
newStack.push(40)
console.log("top element = ", newStack.peek())
newStack.push(50);
console.log("removed element = ", newStack.pop());
console.log("removed element = ", newStack.pop());
newStack.push(90);
console.log("top element = ", newStack.peek());
