const words = ["book", "apple", "elite", "sum", "destruction", "present"];
const filter = words.filter((word) => word.length > 5);
console.log(filter);

const foreach = [];
words.forEach((word) => {
  if (word.length > 5) foreach.push(word);
});
console.log(foreach);

const map = words.map((word) => {
  if (words.indexOf(word) % 2 === 0) {
    return word.toLocaleUpperCase();
  }
  return word;
});
console.log(map);
