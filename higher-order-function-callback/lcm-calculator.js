function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  let multiple = max;

  while (true) {
    let isCommonMultiple = true;

    for (let num of numbers) {
      if (multiple % num !== 0) {
        isCommonMultiple = false;
        break;
      }
    }

    if (isCommonMultiple) {
      return multiple;
    }

    multiple++;
  }
}
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
