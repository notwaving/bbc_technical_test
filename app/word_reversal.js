// INSTRUCTIONS: A need has been identified for a function that can reverse words within a string but leaving them in the same order just the letters reversed to support testing of Arabic output on BBC News. Remember to: Reverse the words within the string but not the order of the words. The input to the function would be string of N characters in length – the string only consists of lowercase letters (a-z) and space and the output is the words reversed. The input string will contain one or more words of varying lengths.

// Write a function that can reverse words within a string, but NOT the order of the words

// Strings are immutable so all changes need to be made into an array first.
// We split every character and put in an array so they are treated as separate array items. Calling reverse() reverses the order of the words too, and join() converts the array to a string. If we repeat this process but this time split and join with *spaces*, we can revert to the original word order as required.
function wordReversal(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}
function lengthCheck (string) {
  if (string.length <= 12) {
    return wordReversal(string);
  } else {
      let newString = string.slice(0, 12);
      let result = wordReversal(newString);
      return result + "...";
    };
};  

console.log(lengthCheck("here is a phrase with more than 12"));

module.exports = {
  wordReversal
}

// N.B. Although the instructions state that the string passed to the function will consist of lowercase letters (a-z) and spaces, for safety you could add an if/else statement to this function with a regular expression. If the string failed the regex test the user would be prompted to try again, this time entering the required characters.