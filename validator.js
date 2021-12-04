const inputElement = document.querySelector('#form-input');

const errorElement = document.querySelector('.error-message');

function test (value) {
    return value.trim() ? undefined : 'Vui lòng nhập trường này!';
}


inputElement.onblur = function () {
    const inputValue = inputElement.value;
    const errorMessage = test(inputValue);
    
    if(errorMessage) {
        inputElement.classList.add('invalid');
        errorElement.innerText = errorMessage; 
    }else {
        errorElement.innerText = '';
        inputElement.classList.remove('invalid');
    }
}

inputElement.oninput = () => {
    errorElement.innerText = '';
    inputElement.classList.remove('invalid');
    var regex=/^[0-9]+$/; 
    if(!inputElement.value.match(regex) || inputElement.value.length != 10) {
        inputElement.classList.add('invalid'); 
        errorElement.innerText = 'Vui lòng nhập đúng số điện thoại!'; 
    }
}

inputElement.onchange = () => {
    // if(isNaN(inputElement.value) || inputElement.value.length != 10) {
    //     inputElement.classList.add('invalid');
    //     errorElement.innerText = 'Vui lòng nhập đúng số điện thoại!'; 
    // }else {
    //     inputElement.classList.remove('invalid');
    //     errorElement.innerText = '';
    // }

    
}
