function findLongestWordLength(word) {
  let array = word.split(" ");
  let longestLength = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestLength) {
      longestLength = array[i].length;
    }
  }

  return longestLength;
}