function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  return collection.filter(function (object) {
    return keys.every(function (key) {
      return object[key] === source[key];
    });
  });
}
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" },
  ),
);
