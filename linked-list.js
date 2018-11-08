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

  insertBefore(item, value) {
    let currNode = this.head;
    let prevNode = this.head;

    while (currNode.value !== value) {
      if (currNode.next === null) {
        return null;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }

    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, value) {
    let currNode = this.head;

    while (currNode.value !== value) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }

    currNode.next = new _Node(item, currNode.next);
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
}

function display(SLL) {
  let currNode = SLL.head;
  if (!SLL.head) {
    return null;
  }
  while (currNode && currNode.value !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(SLL) {
  let currNode = SLL.head;
  let size = 0;
  if (!SLL.head) {
    return size;
  }
  while (currNode && currNode.value !== null) {
    currNode = currNode.next;
    size++;
  }
  return size;
}

function isEmpty(SLL) {
  return SLL.head === null;
}

function findPrevious(SLL, item) {
  let currNode = SLL.head;

  if (!SLL.head) {
    return null;
  }

  while (currNode && currNode.value !== null) {
    if (currNode.next && currNode.next.value === item) {
      return currNode;
    } else if (currNode.next === null) {
      return null;
    }
    currNode = currNode.next;
  }
}

function findLast(SLL) {
  let currNode = SLL.head;

  if (!SLL.head) {
    return null;
  }

  while (currNode && currNode.value !== null) {
    if (currNode.next === null) {
      return currNode;
    }
    currNode = currNode.next;
  }
}

function main() {
  const SLL = new LinkedList();
  const emptySLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // display(SLL);
  SLL.remove('squirrel');
  // display(SLL);
  SLL.insertBefore('Athena', 'Boomer');
  // display(SLL);
  SLL.insertAfter('Hotdog', 'Helo');
  // display(SLL);
  SLL.insertAt('Kat', 2);
  // display(SLL);
  SLL.remove('Tauhida');
  display(SLL);
  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log(isEmpty(emptySLL));
  console.log(findPrevious(SLL, 'Apollo'));
  console.log(findLast(SLL));
  console.log(findLast(emptySLL));

  console.log(WhatDoesThisProgramDo(SLL));
}

main();

// Function that skips duplicates in a linked list - O(n^2)
function WhatDoesThisProgramDo(list) {
  let counter = 0;
  let twocounter = 0;

  let current = list.head; // constant

  while (current !== null) {
    counter++;
    // O(n)
    let newNode = current; // constant

    while (newNode.next !== null) {
      twocounter++;
      // O(n)
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next; // constant
      } else {
        newNode = newNode.next; // constant
      }
    }

    current = current.next; // constant
  }

  return { counter, twocounter };
}
