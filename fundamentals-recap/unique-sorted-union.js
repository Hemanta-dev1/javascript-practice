function uniteUnique(...arrays) {
  const result = [];

  for (const array of arrays) {
    for (const value of array) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }

  return result;
}
console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));