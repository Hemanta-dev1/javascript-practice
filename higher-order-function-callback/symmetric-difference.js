function diffArray(arr1, arr2) {
  const uniqueInArr1 = arr1.filter(function (element) {
    return !arr2.includes(element);
  });

  const uniqueInArr2 = arr2.filter(function (element) {
    return !arr1.includes(element);
  });

  return uniqueInArr1.concat(uniqueInArr2);
}
