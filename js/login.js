document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');
    const userEmail = emailField.value;
    const userPassword = passwordField.value;
    if(userEmail == 'asif@gmail.com' && userPassword == 'secret'){
        window.location.href ='banking.html'
    }else{
        alert('Get out please');
    }
   
});


