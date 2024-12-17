function checkPalindrome() {
    let inputText = document.getElementById('inputText').value;
    let result = document.getElementById('result');

    // Remove non-alphanumeric characters and convert to lowercase
    let cleanText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the string
    let reversedText = cleanText.split('').reverse().join('');

    // Check if the text is equal to its reverse
    if (cleanText === reversedText) {
        result.textContent = `"${inputText}" is a palindrome!`;
        result.style.color = "green";
    } else {
        result.textContent = `"${inputText}" is not a palindrome.`;
        result.style.color = "red";
    }
}
