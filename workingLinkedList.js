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
    if (this.head == null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNote.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    //start at the head
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    //check for the item
    while (currNode.value !== item) {
      //return null if it´s the ond of the list and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
  }
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to ve removed is head , make next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previouss node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}
