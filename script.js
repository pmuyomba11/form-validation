const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Fuctions...
//Error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.textContent = message;
}

//Success
function showSuccess(input) {
    const formControl = username.parentElement;
    formControl.className = "form-control success"
}
//Check email IS valid..
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getNameField(input)} is required!`)
        } else {
            showSuccess(input);
        }
    })
}
//
function getNameField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
//Check input length...
showError
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getNameField(input)} must be atleast ${min} characters!`)
    } else if(input.value.length > max ){
        showError(input,`${getNameField(input)} must be less than ${max} characters`);

    } else {
        showSuccess(input);
    }

}
//Check Password Match...
function matchPassword(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not Match!')
    }
}

//Event Listeners...
form.addEventListener('submit', function (event) {
    event.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    matchPassword(password, password2)
})