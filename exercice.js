class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insert first
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert Last
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      currrent = this.head;

      while (currrent.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //remove
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  //Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //Insert At
  insertAt(data, index) {
    //If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    //if first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }
}

const SLL = new LinkedList();

SLL.insertFirst('Apolo');
SLL.insertFirst('Boomer');
SLL.insertFirst('Helo');
SLL.insertFirst('Husker');
SLL.insertFirst('Starbuck');
SLL.insertAt(1, 'teste');

SLL.printListData();
