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

document.getElementById('submit-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const currentTypedNumber = typedNumberField.value;

    if(currentTypedNumber === currentPin){
        const successPin = document.getElementById('success-pin');
        // successPin.innerText = '✅ Pin Matched... Secret door is opening for you';
        // successPin.innerHTML = '<span class="notify">✅ Pin Matched... Secret door is opening for you</span>';

        // console.log('correct pin')

        if(successPin.style.display === 'none'){
            successPin.style.display = 'block';
        }
        else{
            successPin.style.display = 'block';
        }
    }
    else{
        const inncorrectPin = document.getElementById('inncorrect-pin');
        // inncorrectPin.innerText = "❌ Pin Didn't Match, Please try again";
        // inncorrectPin.innerHTML = "<span class='notify'>❌ Pin Didn't Match, Please try again</span>";
        // console.log('inncorrect pin')
        if(inncorrectPin.style.display === 'none'){
            inncorrectPin.style.display = 'block';
        }
        else{
            inncorrectPin.style.display = 'block';
        }
    }
})