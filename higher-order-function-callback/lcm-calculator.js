function smallestCommons(arr) {
  // Sort numbers so the smaller number comes first
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  // Create an array containing the range of numbers
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  // Start checking from the largest number
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
