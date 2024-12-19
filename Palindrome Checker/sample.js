let result = document.getElementById("result");
let btn = document.getElementById("btn");
function checkPalindrome() {
  let inputText = document.getElementById("inputText").value;  
  let cleanText = inputText.toLowerCase();
  let isPalindrome = true;

  for (let i = 0; i < cleanText.length / 2; i++) {
    if (cleanText[i] !== cleanText[cleanText.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    result.innerHTML = "This word is a palindrome";
  } else {
    result.innerHTML = "This word is not a palindrome";
  }
}
btn.addEventListener("click", checkPalindrome);
