/*
Requirements:
https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

Testcase:
Input:
2
16
13

Output:
16,
13
*/

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printLinkedList(head) {
  let currentElem = head
  
    while (currentElem) {
      console.log(currentElem.data)
      currentElem = currentElem.next
    }
 
}

function main() {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    printLinkedList(llist.head);
}
