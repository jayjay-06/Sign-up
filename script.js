const password = document.getElementById('password');
const confirmpassword = document.getElementById('cpassword');
const passwordisvalid = document.getElementById('passwordvalid');


confirmpassword.addEventListener('input', () => {
    if(password.value !=confirmpassword.value){
        passwordisvalid.innerHTML=("Password do not match");
    }
    else {
        passwordisvalid.innerHTML=("");
    }
});