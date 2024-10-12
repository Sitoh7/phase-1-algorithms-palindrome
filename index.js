function isPalindrome(word) {
  // Write your algorithm here
  let array=[]
  for(let i=word.length -1;i>=0;i--){
//  console.log(word.charAt(i))
  array.push(word.charAt(i))

}
 reversedWord = array.join("")

 if(word==reversedWord){
     return true
 }
 else{
     return false
 }
}

/* 
  Add your pseudocode here
*/
console.log("hi")
/*
  Add written explanation of your solution here
  First i create an empty array to store characters of reversed string.
  Then i do a for loop that iterates through the string from the last 
  character to the first character and pushes it to the array.
  Then i use .join to turn the array into a string.
  Finally i compare the reversed string to the original string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
