document.getElementById('cashout-box').addEventListener('click', function(){
    toggle('add-money-section', "none");
    toggle('cashout-section', "block");
    toggle('transaction-section', "none");
})


document.getElementById('cashout-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashoutAmount = getInputValueById('cashout-amount');

    const pin = getInputValueById('cashout-pin');

    const mainBalance = getInnerTextById('main-balance');
    console.log(cashoutAmount,pin,mainBalance);

    const accountNo = getInputValueById('cashout-number'); 
    
    const cashoutTransaction = document.getElementById('transaction');

    if(cashoutAmount > mainBalance){
        alert('Cashout money must be less than avilable balance');
        return;
    }

    if(pin === 1234){
        const sum = mainBalance - cashoutAmount;
        // document.getElementById('main-balance').innerText = sum;
        setInnerTextById('main-balance', sum);


        const p = document.createElement('p');
        p.innerHTML = `
            Cashout money as $ ${cashoutAmount} from Account no. ${accountNo} 
        `;
        cashoutTransaction.appendChild(p);
    }
    else{
        console.log('Wrong Pin');
    }
})