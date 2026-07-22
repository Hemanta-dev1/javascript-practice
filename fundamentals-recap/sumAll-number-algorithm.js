function sumAll(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
}
console.log(sumAll([4, 7]));
