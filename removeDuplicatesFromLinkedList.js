class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let node = linkedList,
    removing = false;
  let prev = linkedList,
    temp;
  while (!!node) {
    if (!removing) {
      prev = node;
    }

    node = node.next;

    if (prev.value === node?.value) {
      removing = true;

      if (node.next === null) {
        prev.next = null;
        break;
      }
    } else {
      if (!!removing) {
        node.next !== null ? (prev.next = node) : (prev.next = null);
        removing = false;
      }
    }
  }

  return linkedList;
}
