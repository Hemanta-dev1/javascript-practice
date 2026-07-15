// Checks if a word is a palindrome (case-insensitive)
function isPalindrome(word) {
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split("").reverse().join("");

  return lowerWord === reversedWord;
}

function findPalindromeBreaks(words) {
  if (words.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      result.push(i);
    }
  }

  return result;
}


function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const phraseMap = new Map();


  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (!phraseMap.has(phrase)) {
      phraseMap.set(phrase, []);
    }

    phraseMap.get(phrase).push(i);
  }

  const result = [];

  for (const indices of phraseMap.values()) {
    if (indices.length > 1) {
      result.push(...indices);
    }
  }

  return result.sort((a, b) => a - b);
}


function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  const result = [];

  for (const words of texts) {
    result.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    });
  }

  return result;
}


const texts = [
  ["madam", "level", "hello", "madam", "level", "hello"],
  ["racecar", "apple", "racecar", "apple", "racecar"],
  ["wow", "mom", "dad"]
];

console.log(analyzeTexts(texts, 2));