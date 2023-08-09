function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin length not 4 degit', pin);
        return getPin();
    };
};

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
};

// console.log('connection check')

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const numbers = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumberString = typedNumberField.value;
    
    if(isNaN(numbers)){
        if(numbers === 'C'){
            typedNumberField.value = '';
        }
        else if(numbers === '<'){
            const digits = previousTypedNumberString.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumberString + numbers;
        typedNumberField.value = newTypedNumber;
    }

    // console.log(numbers)
});