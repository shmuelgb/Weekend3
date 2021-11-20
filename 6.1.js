function accum(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    output += str[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      output += str[i];
    }
    output += "-";
  }
  return output.substring(0, output.length - 1);
}
console.log(accum("shmuel"));
