class Node {
  constructor(
    data // for creating node
  ) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    // first pointer
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let prev = this.head;
      newNode.next = prev;
      this.head = newNode;
    }
    this.size = this.size + 1;
    this.printList();
  }
  addLast(data) {
    let newNode = new Node(data);
    let current = this.head;

    if (this.head == null) {
      this.addFirst(data);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size = this.size + 1;
    this.printList();
  }
  insertAtPosition(data, position) {
    let newNode = new Node(data);

    if (this.head == null && position == 0) {
      this.addFirst(data);
    } else if (position < 0) {
      console.log(
        "invalid position, please enter valid position to enter node"
      );
      return;
    } else if (position >= this.getSize()) {
      this.addLast(data);
    } else {
      if (position == 0) {
        this.addFirst(data);
        return;
      }

      let current = this.head;
      let prev = null;
      let counter = 0;

      while (counter < position) {
        prev = current;
        current = current.next;
        counter++;
      }
      newNode.next = current;
      prev.next = newNode;

      this.size = this.size + 1;

      this.printList();
    }
  }
  deleteFirst() {
    if (this.head == null) {
      console.log("list is empty");
      return;
    } else {
      let current = this.head;
      this.head = current.next;
      this.size = this.size - 1;
    }
    this.printList();
  }
  deleteLast() {
    if (this.head == null) {
      console.log("list is empty");
      return;
    } else {
      let current = this.head;
      let prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      this.size = this.size - 1;
    }
    this.printList();
  }
  deleteAtPosition(position) {
    if (this.head == null) {
      this.deleteFirst();
    } else if (position > this.size || position < 0) {
      console.log("invalid position");
    } else if (position == this.size - 1) {
      this.deleteLast();
    } else {
      let current = this.head;
      let prev = null;
      let counter = 0;

      if (position == 0) {
          this.deleteFirst(position);
          return
      }

      while (counter < position) {
        prev = current;
        current = current.next;
        counter += 1;
      }
      prev.next = current.next;
      this.size = this.size - 1;
    }
    this.printList();
  }
  printList() {
    let current = this.head;
    let res = "";
    while (current) {
      res += current.data + " -> ";
      current = current.next;
    }
    res += "NULL";
    console.log(res);
    this.getSize();
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    console.log("list size = ", this.size);
    return this.size;
  }
}

const node = new SinglyLinkList();
node.addFirst(10);
node.addFirst(30);
node.addFirst(20);

node.addLast(40);
node.addLast(50);

node.addFirst(60);

node.insertAtPosition(90, 4);

node.insertAtPosition(100, 2);

node.insertAtPosition(5, 0);

node.insertAtPosition(50, 12);

node.insertAtPosition(40, -5);

node.deleteFirst();
node.deleteFirst();
node.deleteLast();
node.deleteLast();
node.deleteLast();
node.deleteAtPosition(6);
node.deleteAtPosition(-1);
node.deleteAtPosition(4);
node.deleteAtPosition(0);
node.deleteAtPosition(1);