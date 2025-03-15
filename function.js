function calculate() {
    // Get user input using prompt
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operation = prompt("Enter an operation (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Check if input is valid
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate the correct result (but we won't show this)
    let correctResult;
    switch (operation) {
        case "+":
            correctResult = num1 + num2;
            break;
        case "-":
            correctResult = num1 - num2;
            break;
        case "*":
            correctResult = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Error: Division by zero is not allowed!");
                return;
            }
            correctResult = num1 / num2;
            break;
        default:
            alert("Invalid operation! Please enter +, -, *, or /.");
            return;
    }

    // Generate a completely random result
    let randomizedResult = correctResult + (Math.random() * 20 - 10); // Adds a random number between -10 and 10

    // Show the fake result
    alert("Result: " + randomizedResult.toFixed(2));
}

// Call the function to start the calculator
calculate();