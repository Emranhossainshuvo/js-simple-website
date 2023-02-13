document.getElementById('submit-button').addEventListener('click', function(){
    // console.log('sumbit button clicked');
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    if(email === 'sontan@baap.com' && password === 'shuvo@gorib.com'){
        window.location.href = 'bank.html'
    }
    else{
        alert('toke ami tejjo shontan korlam tui amar passwordk vule gesos');
    }
})