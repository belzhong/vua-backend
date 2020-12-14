import { 
  vuaSinglyLinkedListNode,
} from '../../visualuralgo/src/data_structures/singly_linked_list.js';

export function fromArrayToLinkedList(arr) {
  const head = {next: null};
  for (let i = arr.length - 1; 0 <= i; --i) {
    const node = new vuaSinglyLinkedListNode(arr[i], head.next);
    head.next = node;
  }
  return head.next;
}
