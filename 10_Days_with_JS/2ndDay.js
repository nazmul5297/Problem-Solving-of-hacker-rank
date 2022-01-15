/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const letterArray = s.split("");
  const vowelLetters = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const firstPritedLetter = [];
  const secondPritedLetter = [];

  for (const element of letterArray) {
    if (vowelLetters.includes(element)) {
      firstPritedLetter.push(element);
    } else {
      secondPritedLetter.push(element);
    }
  }
  for (const element of firstPritedLetter) {
    console.log(element);
  }
  for (const element of secondPritedLetter) {
    console.log(element);
  }
}
