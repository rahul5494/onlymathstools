// Function to generate a random string for the QR code
function generateRandomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
}

// DOM Elements
const form = document.getElementById('donate');
const donationInput = document.getElementById('donationAmount');
const qrCodeContainer = document.getElementById('qrcode');

// Initial placeholder for QR code
qrCodeContainer.innerHTML = `
    <div class="qr-title">Your QR Code Will Appear Here</div>
    <div class="qr-placeholder">Please fill out the form to generate a QR code.</div>
`;

// QR Code Generation Function
donationInput.addEventListener('input', function () {
    const donerName = document.getElementById('Name').value.trim();
    const donerEmail = document.getElementById('Email').value.trim();
    const donationAmount = donationInput.value.trim();

    if (!donerName || !donerEmail) {
        qrCodeContainer.innerHTML = `
            <div class="qr-title">Incomplete Information</div>
            <div class="qr-placeholder">Please enter your name and email to generate a QR code.</div>
        `;
        return;
    }

    if (donationAmount <= 0 || isNaN(donationAmount)) {
        qrCodeContainer.innerHTML = `
            <div class="qr-title">Invalid Donation Amount</div>
            <div class="qr-placeholder">Please enter a valid donation amount greater than 0.</div>
        `;
        return;
    }

    // Generate UPI URL
    const randomMessage = generateRandomString(100);
    const url = `upi://pay?pa=9772539583@ibl&pn=Rahul Kumar Prajapat&am=${donationAmount}&cu=INR&tn=${randomMessage}'${donerEmail}''${donerName}'`;

    // Clear and regenerate QR Code
    qrCodeContainer.innerHTML = `
        <div class="qr-title">Scan QR Code and Pay</div>
        <div class="qr-code"></div>
    `;
    const qrCodeElement = document.querySelector('.qr-code');
    new QRCode(qrCodeElement, {
        text: url,
        width: 256,
        height: 256,
    });
});
