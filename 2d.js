// Function to dynamically generate inputs based on selected shape
function generateShapeInputs() {
  const shape = document.getElementById('shape').value;
  const shapeInputsDiv = document.getElementById('shapeInputs');
  shapeInputsDiv.innerHTML = ''; // Clear previous inputs

  switch (shape) {
    case 'triangle':
      shapeInputsDiv.innerHTML = `
          <label for="side1">Side 1:</label>
          <input type="number" id="side1" name="side1" placeholder="Enter first side length" required>
          <label for="side2">Side 2:</label>
          <input type="number" id="side2" name="side2" placeholder="Enter second side length" required>
          <label for="side3">Side 3:</label>
          <input type="number" id="side3" name="side3" placeholder="Enter third side length" required>
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
          
          <select id="polygonSides" name="polygonSides" onchange="generatePolygonSideInputs()">
              <option value="" disabled selected>Select 3d Shape</option>
              ${[...Array(8)].map((_, i) => `<option value="${i + 3}">${i + 3} sides</option>`).join('')}
          </select>
          <div id="sideInputs"></div>
      `;
      break;
  }
}

// Function to dynamically generate inputs for polygon sides
function generatePolygonSideInputs() {
  const numSides = parseInt(document.getElementById('polygonSides').value);
  const sideInputsDiv = document.getElementById('sideInputs');
  sideInputsDiv.innerHTML = ''; // Clear previous inputs

  for (let i = 1; i <= numSides; i++) {
    sideInputsDiv.innerHTML += `
        <label for="side${i}">Side ${i}:</label>
        <input type="number" id="side${i}" name="side${i}" placeholder="Enter length of side ${i}" required>
    `;
  }
}

// Function to calculate area and perimeter
function calculateArea() {
  const shape = document.getElementById('shape').value;
  let area = 0, perimeter = 0;

  // Helper function to get input values
  function getInputValue(id) {
    const value = parseFloat(document.getElementById(id)?.value);
    if (isNaN(value) || value <= 0) {
      alert(`Please enter a valid positive number for ${id}`);
      return null;
    }
    return value;
  }

  switch (shape) {
    case 'triangle':
      const side1 = getInputValue('side1');
      const side2 = getInputValue('side2');
      const side3 = getInputValue('side3');
      if (side1 === null || side2 === null || side3 === null) return;

      const s = (side1 + side2 + side3) / 2;
      area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
      perimeter = side1 + side2 + side3;
      break;

    case 'square':
      const squareSide = getInputValue('side');
      if (squareSide === null) return;
      area = squareSide ** 2;
      perimeter = 4 * squareSide;
      break;

    case 'rectangle':
      const length = getInputValue('length');
      const width = getInputValue('width');
      if (length === null || width === null) return;
      area = length * width;
      perimeter = 2 * (length + width);
      break;

    case 'rhombus':
      const diagonal1 = getInputValue('diagonal1');
      const diagonal2 = getInputValue('diagonal2');
      if (diagonal1 === null || diagonal2 === null) return;
      area = (diagonal1 * diagonal2) / 2;
      const side = Math.sqrt((diagonal1 / 2) ** 2 + (diagonal2 / 2) ** 2);
      perimeter = 4 * side;
      break;

    case 'parallelogram':
      const base = getInputValue('base');
      const height = getInputValue('height');
      if (base === null || height === null) return;
      area = base * height;
      perimeter = "Cannot calculate without full side lengths";
      break;

    case 'polygon':
      const numSides = parseInt(document.getElementById('polygonSides').value);
      const sideLengths = [];
      for (let i = 1; i <= numSides; i++) {
        const sideLength = getInputValue(`side${i}`);
        if (sideLength === null) return;
        sideLengths.push(sideLength);
      }

      perimeter = sideLengths.reduce((sum, side) => sum + side, 0);

      // Calculate area using Brahmagupta's formula (assumes cyclic polygon)
      const semiPerimeter = perimeter / 2;
      let cyclicArea = semiPerimeter;
      sideLengths.forEach(side => {
        cyclicArea *= (semiPerimeter - side);
      });
      area = Math.sqrt(cyclicArea);
      break;

    default:
      alert("Please select a shape and fill out the required fields.");
      return;
  }

  // Display Results
  document.getElementById('perimeter').textContent = `Perimeter: ${perimeter}`;
  document.getElementById('area').textContent = `Area: ${area ? area.toFixed(2) : 'Cannot be calculated'}`;
}
