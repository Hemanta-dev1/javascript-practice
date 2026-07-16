function chunkArrayInGroups(arr, size) {

  let result = [];

  for (let i = 0; i < arr.length; i += size) {


    let chunk = arr.slice(i, i + size);

    result.push(chunk);
  }


  return result;
}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));


console.log(chunkArrayInGroups([1, 2, 3, 4, 5], 2));


