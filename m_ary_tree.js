const data = new getRandomIntegerArray(getRandomInteger(8, 30));
const head = new vuaMAryTreeHead();

function constructTree(head, data) {
  head.next = new vuaMAryTreeNode(getRandomInteger(5, 40));
  let p = 0;
  const queue = [head.next];

  while (p < data.length) {
    const cur = queue.shift();
    const n = getRandomInteger(1, 5);
    for (let i = 0; i < n && i + p < data.length; ++i) {
      const val = data[i + p];
      const node = new vuaMAryTreeNode(val);
      cur.children.push(node);
      queue.push(node);
    }
    p += 3;
  }
}

function printMAryTree(head) {
  let cur = head.next !== null ? [head.next] : []; 
  let next = [];

  while (cur.length !== 0) {
    const values = [];
    for (const node of cur) {
      values.push(node.value);
      next.push(...node.children);
    }
    cur = next;
    next = [];
  }
}

constructTree(head, data);
