function calculateBMI() {
    let weight = Number(document.getElementById('weight').value);
    let height = Number(document.getElementById('height').value);
    let bmi = weight / (height * height);
    let resultText = bmi.toFixed(2)
    
    if (bmi < 18.5) {
        resultText += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += " (Overweight)";
    } else {
        resultText += " (Obesity)";
    }
    document.getElementById('result').innerHTML = resultText;
}

btn.addEventListener("click", calculateBMI)
