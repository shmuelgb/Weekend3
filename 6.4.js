function isogram(str) {
  str = str.toLowerCase().split("");
  return str.every((c, i) => str.indexOf(c) == i);
}

console.log(isogram("ablkj"));
