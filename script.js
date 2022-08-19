

let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
let createBtn = document.getElementById('create_account');
let errorMsg = document.getElementById('error_msg');


createBtn.addEventListener( 'click', function(){
  
    if( password.value != confirmPassword.value){
        errorMsg.innerHTML = `<li class="error">passwords do not match</li>`;

        password.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
    }
})