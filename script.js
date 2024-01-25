let inputOperand = '';
let outputOperand = '';
let selectedOperator = '';

const operandButtons = document.querySelectorAll('.operandButton');
const operationButtons = document.querySelectorAll('.operatorButton');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const resultBtn = document.querySelector('#result');
const clearBtn = document.querySelector('#clear');
const cleanEntryBtn = document.querySelector('#ce');
const periodBtn = document.querySelector('.period');

operandButtons.forEach((button) => {
    button.addEventListener(('click'), (event) => {
        updateInputScreen(event.target.id)
    });
});

function updateInputScreen(number) {
    if (input.textContent.length < 10) {
        inputOperand += number.toString();
    }
    input.textContent = `${inputOperand}`;
}

function forceUpdateInput(number) {
    inputOperand = number.toString();
    input.textContent = number;
}

function forceUpdateOutput(number) {
    outputOperand = number.toString();
    output.textContent = number;
}

function reset() {
    inputOperand = '';
    outputOperand = '';
    selectedOperator = '';
    output.textContent = '0';
    input.textContent = '0';
}

function selectOperator(button) {
    operationButtons.forEach((button) => {
        button.setAttribute('class', 'operatorButton btn');
    });
    const selectedBtn = document.querySelector(`#${button}`);
    selectedBtn.setAttribute('class', 'selectedOperator operatorButton btn');
}

operationButtons.forEach((button) => {
    button.addEventListener(('click'), (event) => {
        if (outputOperand === '' && inputOperand !== '') {
            forceUpdateOutput(inputOperand);
            inputOperand = '';
            input.textContent = '0';
        }
        switch (event.target.id) {
            case 'addition':
            case 'substraction':
            case 'multiplication':
            case 'division':
                selectedOperator = event.target.id;
                selectOperator(event.target.id);
        }
    });
});

periodBtn.addEventListener(('click'), (event) => {
    if (!(inputOperand.includes('.')) && inputOperand.length > 0) {
        inputOperand += '.';
        input.textContent = `${inputOperand}`;        
    }
});

resultBtn.addEventListener(('click'), () => {
    if (outputOperand === '') {
        reset();
    } else if (output.textContent.length < 11 && input.textContent.length < 11){
        switch(selectedOperator) {
            case 'addition':
                forceUpdateOutput(addition(inputOperand, outputOperand));
                break;
            case 'substraction':
                forceUpdateOutput(substraction(inputOperand, outputOperand));
                break;
            case 'multiplication':
                forceUpdateOutput(multiplication(inputOperand, outputOperand));
                break;
            case 'division':
                forceUpdateOutput(division(inputOperand, outputOperand));
                break;
        }
    }
});

cleanEntryBtn.addEventListener(('click'), () => {
    if (input.textContent.length > 1) {
        inputOperand = inputOperand.toString().slice(0, -1);
        input.textContent = inputOperand.toString();
    } else if (input.textContent.length === 0 || input.textContent.length === 1) {
        inputOperand = '';
        input.textContent = '0';
    }
});

clearBtn.addEventListener(('click'), reset);

function addition(num1, num2) {
    return Number(num2) + Number(num1);
}

function substraction(num1, num2) {
    return Number(num2) - Number(num1);
}

function multiplication(num1, num2) {
    return Math.round((Number(num2) * Number(num1)) * 100) / 100;
}

function division(num1, num2) {
    return Math.round((Number(num2) / Number(num1)) * 100) / 100;
}
