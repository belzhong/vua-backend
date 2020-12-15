import { 
  vuaSinglyLinkedListNode,
} from '../../visualuralgo/src/data_structures/singly_linked_list.js';
import { 
  vuaBinaryTreeNode
} from '../../visualuralgo/src/data_structures/binary_tree.js';
import { 
  vuaMAryTreeNode
} from '../../visualuralgo/src/data_structures/m_ary_tree.js';

export function fromArrayToLinkedList(arr) {
  const head = {next: null};
  for (let i = arr.length - 1; 0 <= i; --i) {
    const node = new vuaSinglyLinkedListNode(arr[i], head.next);
    head.next = node;
  }
  return head.next;
}

export function fromArrayToBinaryTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const root = new vuaBinaryTreeNode(arr[0]);
  const queue = [root];

  for (let i = 1; i < arr.length; i += 2) {
    const node = queue.shift();
    if (arr[i] !== null) {
      node.left = new vuaBinaryTreeNode(arr[i]);
      queue.push(node.left);
    }
    if (i + 1 < arr.length && arr[i + 1] !== null) {
      node.right = new vuaBinaryTreeNode(arr[i + 1]);
      queue.push(node.right);
    }
  }

  return root;
}

export function fromArrayToMAryTree(arr) {
  if (arr.length === 0) {
    return null;
  }
  const root = new vuaMAryTreeNode(arr[0]);
  const queue = [root];

  for (let i = 2; i < arr.length; ++i) {
    const node = queue.shift();
    while (i < arr.length && arr[i] !== null) {
      const child = new vuaMAryTreeNode(arr[i++]);
      node.children.push(child);
      queue.push(child);
    }
  }

  return root;
}
