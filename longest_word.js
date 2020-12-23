/*
 * Function to find the first longest word in a string
 * Uses regex to find only the words, and then uses .reduce to find the first longest word from that array
 */

let findLongestWord = stringToSearch => {
  const words = stringToSearch.match(/[a-zA-Z]+/gm) || ['NO_WORDS_FOUND',]
  return words.reduce(
    (longestWord, currentWord) => currentWord.length > longestWord.length ? currentWord : longestWord
  )
}
module.exports = findLongestWord
