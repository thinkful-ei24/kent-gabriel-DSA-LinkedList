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

function reverse(SLL) {
  let currNode = SLL.head;
  let prevNode = null;
  let nextNode = null;
  let tempNode = null;
  if (!SLL.head) {
    return null;
  }

  // iterate through the SLL
  // set currentNode.next to the previous node
  //
  while (currNode && currNode.value !== null) {
    if (currNode.next === null) {
      SLL.head = currNode;
    }
    nextNode = currNode.next; // storing the next node
    tempNode = currNode;
    currNode.next = prevNode; // reversing the pointer to point to the prevNode
    currNode = nextNode; // Iterating to the next node
    prevNode = tempNode; // setting the previous node to the c
  }
}

// function recrusiveReverse(SLL, head) {
//   // console.log(SLL);
//   let currentNode = head;
//   console.log(currentNode);

//   // Base case
//   if (currentNode.next === null) {
//     return null;
//   }

//   // If head is equal to SLL head set it to null
//   if (SLL.head === head) {

//   }

//   // console.log(`HEAD: `, head);
//   // General case
//   return recrusiveReverse(SLL, currentNode.next);
// }

function thirdFromEnd(list) {
  let currentNode = list.head;

  while (currentNode !== null) {
    if (!currentNode.next.next.next) {
      console.log('returning');
      return currentNode;
    }
    currentNode = currentNode.next;
  }
}

function middleElement(list) {
  // traverse through the list
  // keep track of the middle
  // when the list ends, return the middle
  let currNode = list.head;
  if (!currNode) {
    return null;
  }

  let counter = 0;
  let middleNode = currNode;

  while (currNode !== null) {
    currNode = currNode.next;
    if (counter % 2 === 0 && counter > 0) {
      middleNode = middleNode.next;
    }
    counter++;
  }
  return middleNode;
}

function main() {
  const SLL = new LinkedList();
  // const emptySLL = new LinkedList();
  // SLL.insertFirst('Apollo');
  // SLL.insertLast('Boomer');
  // SLL.insertLast('Helo');
  // SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');
  // SLL.insertLast('Tauhida');
  // // display(SLL);
  // SLL.remove('squirrel');
  // // display(SLL);
  // SLL.insertBefore('Athena', 'Boomer');
  // // display(SLL);
  // SLL.insertAfter('Hotdog', 'Helo');
  // // display(SLL);
  // SLL.insertAt('Kat', 2);
  // // display(SLL);
  // SLL.remove('Tauhida');
  // display(SLL);
  // // console.log(size(SLL));
  // // console.log(isEmpty(SLL));
  // // console.log(isEmpty(emptySLL));
  // // console.log(findPrevious(SLL, 'Apollo'));
  // // console.log(findLast(SLL));
  // // console.log(findLast(emptySLL));

  // // console.log(WhatDoesThisProgramDo(SLL));
  // reverse(SLL);
  // console.log('===============');
  // display(SLL);
  // console.log('===============');
  // console.log(thirdFromEnd(SLL));
  const cycleList = new LinkedList();

  cycleList.head = new _Node('1', null);
  cycleList.head.next = new _Node(
    '2',
    new _Node('3', new _Node('4', cycleList.head))
  );
  console.log(cycleList);

  checkIfCycled(cycleList);
  checkIfCycled(SLL);

  // cycleList.insertFirst('Hat');
  // cycleList.insertLast('Bat');
  // cycleList.insertLast('Cat');
  // display(cycleList);
}

main();

function checkIfCycled(list) {
  const arrayOfNodes = [];

  let currentNode = list.head;

  while (currentNode !== null) {
    if (arrayOfNodes.includes(currentNode.value)) {
      console.log('found a cycle');
      return;
    }

    arrayOfNodes.push(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log('no cycle');
}

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

/*
while loop through linked list
at every node in the list check whether the inserted item or the node value comes first (ex 2 < 3)
if inserted item is less than next node's value insert it after the current node
*/
