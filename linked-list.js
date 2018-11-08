class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertAt(item, position) {
    let currNode = this.head;
    let prevNode = this.head;
    let currentPosition = 0;

    while (currentPosition !== position && currNode !== null) {
      currentPosition++;
      prevNode = currNode;
      currNode = prevNode.next;
    }
    prevNode.next = new _Node(item, prevNode.next);
  }

  // Retrieval
  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }

  // Remove this
  display() {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode && currNode.value !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }
}

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('moto');
  SLL.insertFirst('Hello');
  SLL.insertFirst('bob');
  // console.log(SLL.find('Hello'));
  SLL.insertAt('bbbb', 1);

  // console.log(SLL.find('bbbb'));
  SLL.remove('bbbb');

  SLL.display();
}

main();
