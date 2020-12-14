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
