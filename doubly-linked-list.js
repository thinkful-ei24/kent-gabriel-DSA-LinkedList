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

function mainDLL() {
  const DLL = new DoublyLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  display(DLL);
}

mainDLL();