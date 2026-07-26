function destroyer(arr) {
  const valuesToRemove = Array.from(arguments).slice(1);

  return arr.filter(function (element) {
    return !valuesToRemove.includes(element);
  });
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
