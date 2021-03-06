class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head, null);
    if (!this.tail) {
      this.tail = this.head;
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      this.tail.next = new _Node(item, null, this.tail);
      this.tail = this.tail.next;
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
    currNode.prev = prevNode;
  }

  insertBefore(item, value) {
    if (!this.head || this.head.value === value) {
      this.insertFirst(item);
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    let newItem = new _Node(item, currentNode, previousNode);
    previousNode.next = newItem;
  }

  insertAfter(item, value) {
    if (!this.head || this.head.value === value) {
      this.insertFirst(item);
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode.value !== value) {
      if (currentNode.next === null) {
        currentNode.next = new _Node(value, currentNode.next, previousNode);
        return;
      } else {
        currentNode = currentNode.next;
      }
    }

    let newItem = new _Node(item, currentNode, previousNode);
    currentNode.next = newItem;
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

    if (this.tail.value === item) {
      this.tail = this.tail.prev;
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
    currNode.next.prev = currNode.prev;
  }
}

function display(DLL) {
  let currNode = DLL.head;
  if (!currNode) {
    return null;
  }
  while (currNode && currNode.value !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function reverse(DLL) {
  let currNode = DLL.head;
  let tempNode = null;
  if (!DLL.head) {
    return null;
  }

  // iterate through the DLL
  // set currentNode.next to the previous node
  while (currNode && currNode.value !== null) {
    if (currNode.next === null) {
      DLL.head = currNode;
    }
    tempNode = currNode.next;
    currNode.next = currNode.prev;
    currNode.prev = tempNode;
    currNode = currNode.prev;
  }
  let tempHead = DLL.head;
  DLL.head = DLL.tail;
  DLL.tail = tempHead;
  return;
}


function mainDLL() {
  const DLL = new DoublyLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  display(DLL);
  console.log('=======');
  // // DLL.insertBefore('hello there', 'Aquaria');

  // display(DLL);
  // console.log('=====');
  // DLL.insertAfter('Sagittaron', 'goodbye there');

  // display(DLL);

  // console.log('=====');

  // DLL.insertAt('hfgadkljkoadfjakfa', 5);

  // display(DLL);
  // console.log(DLL.find('hfgadkljkoadfjakfa'));
  // console.log('=======');
  // display(DLL);
  // console.log('=======');
  // DLL.remove('Gemenon');
  // display(DLL);
  reverse(DLL);
  display(DLL);
}

mainDLL();
