function diffArray(arr1, arr2) {
  const uniqueInArr1 = arr1.filter(function (element) {
    return !arr2.includes(element);
  });

  const uniqueInArr2 = arr2.filter(function (element) {
    return !arr1.includes(element);
  });

  return uniqueInArr1.concat(uniqueInArr2);
}
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"],
  ),
);
console.log(
  diffArray(["ram", "hari", "hari", "raj"], ["ram", "shyam", "hemanta", "raj"]),
);
