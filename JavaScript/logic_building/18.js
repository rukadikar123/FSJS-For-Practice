// 1. Find the First Non-Repeating Character

function findNonRepeating(str) {
  let splittedStr = str.split("");
  console.log(splittedStr);
  console.log(str);

  for (let i = 0; i < splittedStr.length; i++) {
    let isUnique = true;

    for (let j = 0; j < str.length; j++) {
      if (i !==j && splittedStr[i] === str[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return splittedStr[i];
    }
  }
}

console.log(findNonRepeating("aabbc"));
