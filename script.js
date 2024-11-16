function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(display.innerText.slice(-1))) {
        return;
    }
    display.innerText += value;
}

function calculate() {
    let expression = document.getElementById('display').innerText;
    try {
        if (expression.includes('/0')) {
            document.getElementById('display').innerText = 'Erro';
            return;
        }
        let result = eval(expression);
        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = 'Erro';
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function percentage() {
    let display = document.getElementById('display');
    let currentValue = parseFloat(display.innerText);
    // Calcula o valor percentual
    let result = currentValue / 100;
    display.innerText = result;
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = button.innerText;
        if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === '%') {
            percentage();
        } else {
            appendToDisplay(value);
        }
    });
});