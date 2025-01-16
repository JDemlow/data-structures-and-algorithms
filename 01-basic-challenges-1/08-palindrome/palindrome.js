// const isPalindrome = () => { };

function isPalindrome(str) {
  let formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = formattedString.split("").reverse().join("");
  return formattedString === reversed;
}

module.exports = isPalindrome;
