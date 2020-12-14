function bin2() {
  const data = new getRandomIntegerArray(getRandomInteger(8, 30));
  const head = new vuaMAryTreeHead();

  function constructTree(head, data) {
    head.next = new vuaMAryTreeNode(getRandomInteger(5, 40));
    let p = 0;
    const queue = [head.next];

    while (p < data.length) {
      const cur = queue.shift();
      for (let i = 0; i < 2 && i + p < data.length; ++i) {
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
}
function bin() {
  const data = new getRandomIntegerArray(getRandomInteger(80, 20));
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
}
bin();
bin2();
const s1 = new vuaSet();
getRandomIntegerArray(getRandomInteger(5, 20)).forEach(val => s1.add(val));

const s = new vuaMap();
const n = getRandomInteger(5, 20);

for (let i = 0; i < n; ++i) {
  const key = getRandomInteger(10, 100);
  const value = getRandomInteger(100, 1000);
  s.set(key, value);
}
const matrix = new vuaMatrix(3, 7, 0);

function dp(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  matrix[0][0] = 1;

  for (let i = 1; i < row; ++i) {
    matrix[i][0] = 1;
  }
  for (let i = 1; i < col; ++i) {
    matrix[0][i] = 1;
  }

  for (let i = 1; i < row; ++i) {
    for (let j = 1; j < col; ++j) {
      matrix[i][j] += matrix[i - 1][j] + matrix[i][j - 1];
    }
  }
}

dp(matrix);
function swap(data, a, b) {
  const tmp = data[a];
  data[a] = data[b];
  data[b] = tmp;
}

function partition(data, lo, hi) {
  const pivot = lo;

  for (let i = lo + 1; i < hi; ++i) {
    if (data[i] < data[pivot]) {
      swap(data, i, ++lo);
    }
  }
  swap(data, pivot, lo);

  return lo;
}

function quickSort(data, lo = 0, hi = data.length) {
  if (lo < hi) {
    const pivot = partition(data, lo, hi);
    quickSort(data, lo, pivot);
    quickSort(data, pivot + 1, hi);
  }
}

const t1 = getRandomIntegerArray(getRandomInteger(5, 20));
const t2 = getRandomIntegerArray(getRandomInteger(5, 20));
// t1.sort((a, b) => a - b);
// t2.sort((a, b) => a - b);

const data = new vuaVector(...t1);
const data1 = new vuaVector(...t2);
quickSort(data);
quickSort(data1);
const data2 = new vuaVector();

function merge(data1, data2, data) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < data1.length && p2 < data2.length) {
    data.push(data1[p1] < data2[p2] ? data1[p1++] : data2[p2++]);
  }
  while (p1 < data1.length) {
    data.push(data1[p1++]);
  }
  while (p2 < data2.length) {
    data.push(data2[p2++]);
  }
}

merge(data, data1, data2);
function addIntoHead(head, data) {
  data.forEach(val => {
    const tmp = new vuaSinglyLinkedListNode(val, head.next);
    head.next = tmp;
  });
}

function printList(head) {
  let p = head.next;
  const data = [];
  while (p !== null) {
    data.push(p.value);
    p = p.next;
  }
  console.log(data.join(' '));
}

function sortList(head) {
  for (let i = head.next; i !== null; i = i.next) {
    let min = i;
    for (let j = i.next; j !== null; j = j.next) {
      if (j.value < min.value) {
        min = j;
      }
    }
    const tmp = min.value;
    min.value = i.value;
    i.value = tmp;
  }
}

const data5 = getRandomIntegerArray(getRandomInteger(5, 40));
const head = new vuaSinglyLinkedListHead();
addIntoHead(head, data5);
sortList(head);
