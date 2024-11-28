// Function to update the input fields based on the selected shape
function updateInputs() {
    const shape = document.getElementById("shape").value;
    let inputs = "";

    // Update input fields based on selected shape
    switch(shape) {
        case "cube":
            inputs = `
                <label for="side">Side length (a):</label>
                <input type="number" id="side" required><br>
            `;
            break;
        case "sphere":
            inputs = `
                <label for="radius">Radius (r):</label>
                <input type="number" id="radius" required><br>
            `;
            break;
        case "cone":
            inputs = `
                <label for="radius">Radius (r):</label>
                <input type="number" id="radius" required><br>
                <label for="height">Height (h):</label>
                <input type="number" id="height" required><br>
            `;
            break;
        case "cylinder":
            inputs = `
                <label for="radius">Radius (r):</label>
                <input type="number" id="radius" required><br>
                <label for="height">Height (h):</label>
                <input type="number" id="height" required><br>
            `;
            break;
        case "cuboid":
            inputs = `
                <label for="length">Length (l):</label>
                <input type="number" id="length" required><br>
                <label for="width">Width (w):</label>
                <input type="number" id="width" required><br>
                <label for="height">Height (h):</label>
                <input type="number" id="height" required><br>
            `;
            break;
        case "square_pyramid":
            inputs = `
                <label for="base_side">Base side length (a):</label>
                <input type="number" id="base_side" required><br>
                <label for="height">Height (h):</label>
                <input type="number" id="height" required><br>
            `;
            break;
        case "triangular_pyramid":
            inputs = `
                <label for="base_side">Base side length (a):</label>
                <input type="number" id="base_side" required><br>
                <label for="height">Height (h):</label>
                <input type="number" id="height" required><br>
            `;
            break;
        case "hemisphere":
            inputs = `
                <label for="radius">Radius (r):</label>
                <input type="number" id="radius" required><br>
            `;
            break;
        case "torus":
            inputs = `
                <label for="R">Major radius (R):</label>
                <input type="number" id="R" required><br>
                <label for="r">Minor radius (r):</label>
                <input type="number" id="r" required><br>
            `;
            break;
        case "ellipsoid":
            inputs = `
                <label for="a">Semi-major axis (a):</label>
                <input type="number" id="a" required><br>
                <label for="b">Semi-minor axis (b):</label>
                <input type="number" id="b" required><br>
                <label for="c">Semi-intermediate axis (c):</label>
                <input type="number" id="c" required><br>
            `;
            break;
        case "cone_frustum":
            inputs = `
                <label for="r1">Radius of smaller base (r1):</label>
                <input type="number" id="r1" required><br>
                <label for="r2">Radius of larger base (r2):</label>
                <input type="number" id="r2" required><br>
                <label for="height">Height (h):</label>
                <input type="number" id="height" required><br>
            `;
            break;
        case "pyramid_frustum":
            inputs = `
                <label for="l1">Base side length of smaller base (l1):</label>
                <input type="number" id="l1" required><br>
                <label for="l2">Base side length of larger base (l2):</label>
                <input type="number" id="l2" required><br>
                <label for="height">Height (h):</label>
                <input type="number" id="height" required><br>
            `;
            break;
        case "tetrahedron":
            inputs = `
                <label for="side">Side length (a):</label>
                <input type="number" id="side" required><br>
            `;
            break;
        case "octahedron":
            inputs = `
                <label for="side">Side length (a):</label>
                <input type="number" id="side" required><br>
            `;
            break;
        case "dodecahedron":
            inputs = `
                <label for="side">Side length (a):</label>
                <input type="number" id="side" required><br>
            `;
            break;
    }
    document.getElementById("inputFields").innerHTML = inputs;
}

// Function to calculate Volume, CSA, and TSA
function calculate() {
    const shape = document.getElementById("shape").value;
    let volume, csa, tsa;

    switch(shape) {
        case "cube":
            const side = parseFloat(document.getElementById("side").value);
            volume = Math.pow(side, 3);
            csa = 6 * Math.pow(side, 2);
            tsa = csa;
            break;
        case "sphere":
            const radius = parseFloat(document.getElementById("radius").value);
            volume = (4/3) * Math.PI * Math.pow(radius, 3);
            csa = 4 * Math.PI * Math.pow(radius, 2);
            tsa = csa;
            break;
        case "cone":
            const coneRadius = parseFloat(document.getElementById("radius").value);
            const heightCone = parseFloat(document.getElementById("height").value);
            const slantHeight = Math.sqrt(Math.pow(heightCone, 2) + Math.pow(coneRadius, 2));
            volume = (1/3) * Math.PI * Math.pow(coneRadius, 2) * heightCone;
            csa = Math.PI * coneRadius * slantHeight;
            tsa = csa + Math.PI * Math.pow(coneRadius, 2);
            break;
        case "cylinder":
            const radiusCylinder = parseFloat(document.getElementById("radius").value);
            const heightCylinder = parseFloat(document.getElementById("height").value);
            volume = Math.PI * Math.pow(radiusCylinder, 2) * heightCylinder;
            csa = 2 * Math.PI * radiusCylinder * heightCylinder;
            tsa = 2 * Math.PI * radiusCylinder * (heightCylinder + radiusCylinder);
            break;
        case "cuboid":
            const length = parseFloat(document.getElementById("length").value);
            const width = parseFloat(document.getElementById("width").value);
            const heightCuboid = parseFloat(document.getElementById("height").value);
            volume = length * width * heightCuboid;
            csa = 2 * (length * heightCuboid + width * heightCuboid);
            tsa = 2 * (length * width + width * heightCuboid + length * heightCuboid);
            break;
        case "square_pyramid":
            const baseSide = parseFloat(document.getElementById("base_side").value);
            const heightPyramid = parseFloat(document.getElementById("height").value);
            volume = (1/3) * Math.pow(baseSide, 2) * heightPyramid;
            csa = 2 * baseSide * Math.sqrt(Math.pow(baseSide / 2, 2) + Math.pow(heightPyramid, 2));
            tsa = Math.pow(baseSide, 2) + csa;
            break;
        case "triangular_pyramid":
            const baseSideTriangular = parseFloat(document.getElementById("base_side").value);
            const heightPyramidTriangular = parseFloat(document.getElementById("height").value);
            volume = (1/3) * Math.pow(baseSideTriangular, 2) * heightPyramidTriangular;
            csa = 3 * (baseSideTriangular / 2) * Math.sqrt(Math.pow(baseSideTriangular / 2, 2) + Math.pow(heightPyramidTriangular, 2));
            tsa = Math.pow(baseSideTriangular, 2) + csa;
            break;
        case "hemisphere":
            const radiusHemisphere = parseFloat(document.getElementById("radius").value);
            volume = (2/3) * Math.PI * Math.pow(radiusHemisphere, 3);
            csa = 2 * Math.PI * Math.pow(radiusHemisphere, 2);
            tsa = csa;
            break;
        case "torus":
            const majorRadius = parseFloat(document.getElementById("R").value);
            const minorRadius = parseFloat(document.getElementById("r").value);
            volume = 2 * Math.PI * Math.pow(minorRadius, 2) * Math.PI * majorRadius;
            csa = 4 * Math.PI * Math.pow(minorRadius, 2);
            tsa = csa;
            break;
        case "ellipsoid":
            const a = parseFloat(document.getElementById("a").value);
            const b = parseFloat(document.getElementById("b").value);
            const c = parseFloat(document.getElementById("c").value);
            volume = (4/3) * Math.PI * a * b * c;
            csa = 4 * Math.PI * Math.pow(Math.pow(a * b, 1.6) + Math.pow(a * c, 1.6) + Math.pow(b * c, 1.6), 1/1.6);
            tsa = csa;
            break;
        case "cone_frustum":
            const r1 = parseFloat(document.getElementById("r1").value);
            const r2 = parseFloat(document.getElementById("r2").value);
            const heightFrustum = parseFloat(document.getElementById("height").value);
            const slantHeightFrustum = Math.sqrt(Math.pow(heightFrustum, 2) + Math.pow(r2 - r1, 2));
            volume = (1/3) * Math.PI * heightFrustum * (Math.pow(r1, 2) + Math.pow(r2, 2) + r1 * r2);
            csa = Math.PI * (r1 + r2) * slantHeightFrustum;
            tsa = csa + Math.PI * (Math.pow(r1, 2) + Math.pow(r2, 2));
            break;
        case "pyramid_frustum":
            const l1 = parseFloat(document.getElementById("l1").value);
            const l2 = parseFloat(document.getElementById("l2").value);
            const heightFrustumPyramid = parseFloat(document.getElementById("height").value);
            volume = (1/3) * heightFrustumPyramid * (Math.pow(l1, 2) + Math.pow(l2, 2) + l1 * l2);
            csa = l1 * heightFrustumPyramid + l2 * heightFrustumPyramid;
            tsa = csa + Math.pow(l1, 2) + Math.pow(l2, 2);
            break;
        case "tetrahedron":
            const tetrahedronSide = parseFloat(document.getElementById("side").value);
            volume = Math.pow(tetrahedronSide, 3) / (6 * Math.sqrt(2));
            csa = Math.sqrt(3) * Math.pow(tetrahedronSide, 2);
            tsa = csa;
            break;
        case "octahedron":
            const octahedronSide = parseFloat(document.getElementById("side").value);
            volume = Math.pow(octahedronSide, 3) / (3 * Math.sqrt(2));
            csa = 2 * Math.sqrt(3) * Math.pow(octahedronSide, 2);
            tsa = csa;
            break;
        case "dodecahedron":
            const dodecahedronSide = parseFloat(document.getElementById("side").value);
            volume = (15 + 7 * Math.sqrt(5)) / 4 * Math.pow(dodecahedronSide, 3);
            csa = 3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * Math.pow(dodecahedronSide, 2);
            tsa = csa;
            break;
    }

    // Display the results
    document.getElementById("volume").innerText = "Volume: " + volume.toFixed(2) + " cubic units";
    document.getElementById("csa").innerText = "Curved Surface Area (CSA): " + csa.toFixed(2) + " square units";
    document.getElementById("tsa").innerText = "Total Surface Area (TSA): " + tsa.toFixed(2) + " square units";
}

// Call updateInputs initially to display the input fields
updateInputs();

// Update the input fields whenever the shape is changed
document.getElementById("shape").addEventListener("change", updateInputs);
