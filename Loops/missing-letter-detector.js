function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
 
    let currentCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

  
    if (nextCode - currentCode > 1) {
 
      return String.fromCharCode(currentCode + 1);
    }
  }


  return undefined;
}