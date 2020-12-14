const data = new getRandomIntegerArray(getRandomInteger(20, 30));
const head = new vuaBinaryTreeHead();
const vector = new vuaVector();

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

function preorder(root) {
  if (root !== null) {
    vector.push(root.value);
    preorder(root.left);
    preorder(root.right);
  }
}

constructTree(head, data);
preorder(head.next);
