function pairElement(str) {
  const result = [];

  for (const base of str) {
    if (base === "A") {
      result.push(["A", "T"]);
    } else if (base === "T") {
      result.push(["T", "A"]);
    } else if (base === "C") {
      result.push(["C", "G"]);
    } else if (base === "G") {
      result.push(["G", "C"]);
    }
  }

  return result;
}
let ans = pairElement("ATCGA");
console.log(ans);
