function showTab(tab) {
    document.getElementById('tab-content-basic').style.display = tab === 'basic' ? 'block' : 'none';
    document.getElementById('tab-content-sqrt').style.display = tab === 'sqrt' ? 'block' : 'none';
    document.getElementById('tab-basic').classList.toggle('active', tab === 'basic');
    document.getElementById('tab-sqrt').classList.toggle('active', tab === 'sqrt');
}

// Default to 'basic' tab on load
window.onload = function() { showTab('basic'); };

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = '';

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter both numbers.';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'Cannot divide by zero!';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Unknown operation.';
        }
    }
    document.getElementById('result').textContent = 'Result: ' + result;
}

function calculateSqrt() {
    const num = parseFloat(document.getElementById('sqrt-num').value);
    let result = '';
    if (isNaN(num)) {
        result = 'Please enter a number.';
    } else if (num < 0) {
        result = 'Cannot take square root of negative input!';
    } else {
        result = Math.sqrt(num);
    }
    document.getElementById('sqrt-result').textContent = 'Result: ' + result;
}

