document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNo = document.getElementById('input-number').value;
    const pinNo = document.getElementById('input-pin').value;
    const pin = parseInt(pinNo);

    if(accountNo.length === 11){
        if(pin === 1234){
            console.log('Login successfully')
            window.location.href="./main.html"
        }
        else{
            console.log('Invalid pin number')
        }
    }
    else {
        console.log('Invalid account number');
    }
})