function duplicatesCount(str) {
  str = str.toLowerCase().split("");
  const counts = {};
  str.forEach((letter) => {
    counts[letter] = (counts[letter] || 0) + 1;
  });
  return Object.keys(counts).length;
}
console.log(duplicatesCount("aaabbcCcddddee"));
