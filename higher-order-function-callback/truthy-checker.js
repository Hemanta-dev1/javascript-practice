function truthCheck(collection, pre) {
  let result = true;
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;
    }
    return result;
  }
}
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "developer", isBot: true },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name",
  ),
);
