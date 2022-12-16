function isPalindrome(word) {
  // Write your algorithm here

  const input =word.word
  const split_data=input.toLowerCase()
  const firstLetter = split_data.charAt(0)
  const lastLetter = split_data.charAt(input.length-1)
  if(firstLetter === lastLetter){
    document.querySelector('#answer').textContent="Output: True"
  }else{
    document.querySelector('#answer').textContent = "Output: False"

  }
}

function userInputs(e){
  e.preventDefault()
  let inputs={
    word:e.target.word.value
  }
  isPalindrome(inputs)
}



document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#palindrom_form').addEventListener('submit', userInputs)

});

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
