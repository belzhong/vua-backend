const data = getRandomIntegerArray(getRandomInteger(5, 20));
const s = new vuaSet();

data.forEach(val => s.add(val));
s.delete(data[0]);
