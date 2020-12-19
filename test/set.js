const data = getRandomIntegerArray(getRandomInteger(5, 20));
const s = new vuaSet();
const t = new Set();

data.forEach(val => s.add(val));
s.delete(data[0]);
