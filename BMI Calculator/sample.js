function calculateBMI() {
    // Get the input values
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    // Check if the input values are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = "Please enter valid values for weight and height.";
        return;
    }

    // Calculate BMI
    let bmi = weight / (height * height);

    // Display the result
    let resultText = `Your BMI is: ${bmi.toFixed(2)}`;
    
    // Classify the BMI value
    if (bmi < 18.5) {
        resultText += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += " (Overweight)";
    } else {
        resultText += " (Obesity)";
    }

    document.getElementById('result').textContent = resultText;
}
