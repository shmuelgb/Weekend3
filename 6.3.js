function concatLongest(str1, str2) {
  let strArr = str1.concat(" ", str2).split("");
  let output = "";
  let marker;
  for (let i = 97; i <= 122; i++) {
    strArr.forEach((letter) => {
      if (i === letter.charCodeAt()) marker = true;
    });
    if (marker) output += String.fromCharCode(i);
    marker = false;
  }
  return output;
}

let str1 = "hello world";
let str2 = "shmuel gabai";
console.log(concatLongest(str1, str2));
console.log("z".charCodeAt(0));
