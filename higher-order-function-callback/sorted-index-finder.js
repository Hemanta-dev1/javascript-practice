function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  let index = arr.findIndex((element) => element >= num);
  if (index === -1) {
    return arr.length;
  }
  return index;
}
