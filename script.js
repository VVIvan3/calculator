let inputOperand = '';
let outputOperand = '';
let selectedOperator = '';

const operandButtons = document.querySelectorAll('.operandButton');
const operationButtons = document.querySelectorAll('.operatorButton');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

operandButtons.forEach((button) => {
    button.addEventListener(('click'), (event) => {
        updateInputScreen(event.target.id)
    });
});

function updateInputScreen(number) {
    if (input.textContent.length < 10) {
        inputOperand += number;
    }
    input.textContent = `${inputOperand}`;
}

function updateOutputScreen(number) {
    if (output.textContent.length < 10) {
        outputOperand += number;
    }
    output.textContent = `${outputOperand}`;
}

operationButtons.forEach((button) => {
    button.addEventListener(('click'), (event) => {
        switch (event.target.id) {
            case 'addition':
                break;
            case 'substaction':
                break;
            case 'multiplication':
                break;
            case 'division':
                break;
            case 'result':
                break;
        }
    });
});
