// A need has been identified for a function that can reverse words within a string but leaving them in the same order just the letters reversed to support testing of Arabic output on BBC News. Remember to: Reverse the words within the string but not the order of the words.
// The input to the function would be string of N characters in length – the string only consists of lowercase letters (a-z) and space and the output is the words reversed. The input string will contain one or more words of varying lengths.

// Write a function that can reverse words within a string, but NOT the order of the words
function wordReversal(string) {
  // Strings are immutable so all changes need to be made into an array first.
  // We're going to reverse everything in the string first, so we split every character to be treated as a separate array item. This also reverses the order of the words. If we repeat this process but split and join with *spaces*, we can revert the word order
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
};


// Reversing everything in the array will return a reversed order of words too.
// Split this reversed string by spaces, so we can isolate each word in an array, reverse each word and join() to return the result as a string to the user

// Call the function.
console.log(wordReversal("friend or foe"));


module.exports = {
  wordReversal
}