// Update inputs dynamically based on selected function type
function updateTrigInputs() {
    const functionType = document.getElementById('functionType').value;
    const inputSection = document.getElementById('inputSection');
    inputSection.innerHTML = ''; // Clear previous inputs

    if (['sin', 'cos', 'tan', 'csc', 'sec', 'cot'].includes(functionType)) {
        inputSection.innerHTML = `
            <label for="angle">Enter Angle (in degrees):</label>
            <input type="number" id="angle" placeholder="Enter angle (0 to 360)">
        `;
    } else if (['asin', 'acos', 'atan'].includes(functionType)) {
        inputSection.innerHTML = `
            <label for="value">Enter Valuel: </label>
            <input type="number" id="value" step="0.01" placeholder="Enter value">
        `;
    }
}

// Calculate and display trigonometric values
function calculateTrig() {
    const functionType = document.getElementById('functionType').value;
    let result = '';

    if (!functionType) {
        alert('Please select a trigonometric function.');
        return;
    }

    // Helper function to validate input
    function getInputValue(id) {
        const value = parseFloat(document.getElementById(id).value);
        if (isNaN(value)) {
            alert('Please enter a valid input.');
            return null;
        }
        return value;
    }

    if (['sin', 'cos', 'tan', 'csc', 'sec', 'cot'].includes(functionType)) {
        const angle = getInputValue('angle');
        if (angle === null || angle < 0 || angle > 360) {
            alert('Please enter an angle between 0 and 360 degrees.');
            return;
        }

        // Convert angle to radians
        const radians = (Math.PI / 180) * angle;

        // Calculate the result based on the selected function
        switch (functionType) {
            case 'sin':
                result = `sin(${angle}°) = ${Math.sin(radians).toFixed(4)}`;
                break;
            case 'cos':
                result = `cos(${angle}°) = ${Math.cos(radians).toFixed(4)}`;
                break;
            case 'tan':
                result = `tan(${angle}°) = ${Math.tan(radians).toFixed(4)}`;
                break;
            case 'csc':
                result = `csc(${angle}°) = ${(1 / Math.sin(radians)).toFixed(4)}`;
                break;
            case 'sec':
                result = `sec(${angle}°) = ${(1 / Math.cos(radians)).toFixed(4)}`;
                break;
            case 'cot':
                result = `cot(${angle}°) = ${(1 / Math.tan(radians)).toFixed(4)}`;
                break;
        }
    } else if (['asin', 'acos', 'atan'].includes(functionType)) {
        const value = getInputValue('value');
        if (value === null) {
            alert('Please enter some value.');
            return;
        }

        // Calculate the result based on the selected function
        switch (functionType) {
            case 'asin':
                result = `sin⁻¹(${value}) = ${(Math.asin(value) * (180 / Math.PI)).toFixed(4)}°`;
                break;
            case 'acos':
                result = `cos⁻¹(${value}) = ${(Math.acos(value) * (180 / Math.PI)).toFixed(4)}°`;
                break;
            case 'atan':
                result = `tan⁻¹(${value}) = ${(Math.atan(value) * (180 / Math.PI)).toFixed(4)}°`;
                break;
        }
    }

    // Display the result
    document.getElementById('output').innerHTML = result;
}
