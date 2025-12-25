import './style.css'; // this will include your CSS in the bundle

function calculate() {
    const principal = Number(document.getElementById('principal').value);
    const rate = Number(document.getElementById('rate').value);
    const time = Number(document.getElementById('time').value);

    const interest = calculateSimpleInterest(principal, rate, time);
    const total = calculateTotalPayableAmount(principal, interest);

    document.getElementById('result').innerText = `Interest: ₹${interest} | Total: ₹${total}`;
}

function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

function calculateTotalPayableAmount(principal, interestAmount) {
    return principal + interestAmount;
}

// export for Jasmine testing
module.exports = { calculateSimpleInterest, calculateTotalPayableAmount };

// attach calculate to window so HTML button can call it
window.calculate = calculate;
