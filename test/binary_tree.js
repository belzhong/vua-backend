const data = new getRandomIntegerArray(getRandomInteger(200, 300));
const head = new vuaBinaryTreeHead();

function constructTree(head, data) {
  head.next = new vuaBinaryTreeNode(getRandomInteger(5, 20));
  let p = 0;
  const queue = [head.next];

  while (p < data.length) {
    const cur = queue.shift();
    for (let i = 0; i < 2 && i + p < data.length; ++i) {
      const val = data[i + p];
      const node = new vuaBinaryTreeNode(val);
      if (i === 0) {
        cur.left = node;
      } else {
        cur.right = node;
      }
      queue.push(node);
    }
    p += 2;
  }
}

function printMAryTree(head) {
  let cur = head.next !== null ? [head.next] : []; 
  let next = [];
  while (cur.length !== 0) {
    const values = [];
    for (const node of cur) {
      values.push(node.value);
      if (node.left !== null) {
        next.push(node.left);
      }
      if (node.right !== null) {
        next.push(node.right);
      }
    }
    cur = next;
    next = [];
  }
}

function preorder(root) {
  if (root !== null) {
    root.value;
    preorder(root.left);
    preorder(root.right);
  }
}

constructTree(head, data);
preorder(head.next);
