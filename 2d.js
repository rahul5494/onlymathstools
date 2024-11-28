// Function to dynamically generate inputs based on selected shape
function generateShapeInputs() {
    const shape = document.getElementById('shape').value;
    const shapeInputsDiv = document.getElementById('shapeInputs');
    shapeInputsDiv.innerHTML = ''; // Clear previous inputs
  
    switch(shape) {
        case 'triangle':
            shapeInputsDiv.innerHTML = `
                <label for="side1">Side 1:</label>
                <input type="number" id="side1" name="side1" placeholder="Enter first side length" required>
                <label for="side2">Side 2:</label>
                <input type="number" id="side2" name="side2" placeholder="Enter second side length" required>
                <label for="side3">Side 3:</label>
                <input type="number" id="side3" name="side3" placeholder="Enter third side length" required>
                <label for="height">Height (optional):</label>
                <input type="number" id="height" name="height" placeholder="Enter height (optional)">
            `;
            break;
        case 'square':
            shapeInputsDiv.innerHTML = `
                <label for="side">Side:</label>
                <input type="number" id="side" name="side" placeholder="Enter side length" required>
            `;
            break;
        case 'rectangle':
            shapeInputsDiv.innerHTML = `
                <label for="length">Length:</label>
                <input type="number" id="length" name="length" placeholder="Enter length" required>
                <label for="width">Width:</label>
                <input type="number" id="width" name="width" placeholder="Enter width" required>
            `;
            break;
        case 'rhombus':
            shapeInputsDiv.innerHTML = `
                <label for="diagonal1">Diagonal 1:</label>
                <input type="number" id="diagonal1" name="diagonal1" placeholder="Enter first diagonal" required>
                <label for="diagonal2">Diagonal 2:</label>
                <input type="number" id="diagonal2" name="diagonal2" placeholder="Enter second diagonal" required>
            `;
            break;
        case 'parallelogram':
            shapeInputsDiv.innerHTML = `
                <label for="base">Base:</label>
                <input type="number" id="base" name="base" placeholder="Enter base length" required>
                <label for="height">Height:</label>
                <input type="number" id="height" name="height" placeholder="Enter height" required>
            `;
            break;
        case 'polygon':
            shapeInputsDiv.innerHTML = `
                <label for="sides">Number of Sides (3 to 10):</label>
                <select id="polygonSides" name="polygonSides">
                    <option value="3">Triangle (3 sides)</option>
                    <option value="4">Quadrilateral (4 sides)</option>
                    <option value="5">Pentagon (5 sides)</option>
                    <option value="6">Hexagon (6 sides)</option>
                    <option value="7">Heptagon (7 sides)</option>
                    <option value="8">Octagon (8 sides)</option>
                    <option value="9">Nonagon (9 sides)</option>
                    <option value="10">Decagon (10 sides)</option>
                </select>
                <div id="sideInputs"></div>
            `;
            break;
    }
  }
  
  // Function to calculate the area and perimeter of the selected shape
  function calculateArea() {
    const shape = document.getElementById('shape').value;
    let area = 0, perimeter = 0;
  
    // Check if inputs are valid numbers
    function getInputValue(id) {
        const value = parseFloat(document.getElementById(id).value);
        if (isNaN(value) || value <= 0) {
            alert(`Please enter a valid positive number for ${id}`);
            return null;
        }
        return value;
    }
  
    switch(shape) {
        case 'triangle':
            const side1 = getInputValue('side1');
            const side2 = getInputValue('side2');
            const side3 = getInputValue('side3');
            if (side1 === null || side2 === null || side3 === null) return;
  
            // Heron's formula for area of a triangle
            let sex = (side1 + side2 + side3) / 2;
            area = Math.sqrt(sex * (sex - side1) * (sex - side2) * (sex - side3));
            perimeter = side1 + side2 + side3;
            break;
  
        case 'square':
            const squareSide = getInputValue('side');
            if (squareSide === null) return;
            area = squareSide * squareSide;
            perimeter = 4 * squareSide;
            break;
  
        case 'rectangle':
            const length = getInputValue('length');
            const width = getInputValue('width');
            if (length === null || width === null) return;
            area = length * width ;
            perimeter = 2 * (length + width);
            break;
  
        case 'rhombus':
            const diagonal1 = getInputValue('diagonal1');
            const diagonal2 = getInputValue('diagonal2');
            if (diagonal1 === null || diagonal2 === null) return;
            area = (diagonal1 * diagonal2) / 2;
            let mainx = ((diagonal1/2)**2 + (diagonal2/2)**2)**(1/2)
            perimeter = 4 * mainx;
            break;
  
        case 'parallelogram':
            const base = getInputValue('base');
            const height = getInputValue('height');
            if (base === null || height === null) return;
            area = base * height;
            perimeter = "Not calculable without all side lengths";
            break;
  
        case 'polygon':
            const polygonSides = parseInt(document.getElementById('polygonSides').value);
            const sideLengths = [];
            for (let i = 0; i < polygonSides; i++) {
                const sideLength = getInputValue(`side${i + 1}`);
                if (sideLength === null) return;
                sideLengths.push(sideLength);
            }
            perimeter = sideLengths.reduce((sum, side) => sum + side, 0);
            // Calculate area using cyclic formula (assuming regular polygon)
            let sex2 = perimeter / 2;
            let areaCalc = 1;
            for (let i = 0; i < polygonSides; i++) {
                areaCalc *= (sex2 - sideLengths[i]);
            }
            area = Math.sqrt(areaCalc);
            break;
  
        default:
            alert("Please select a shape and fill out the required fields.");
            return;
    }
  
    // Display Results
    document.getElementById('perimeter').textContent = `Perimeter: ${perimeter}`;
    document.getElementById('area').textContent = `Area: ${area.toFixed(2)}`;
  }
  