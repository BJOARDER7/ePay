
document.getElementById('add-money-box').addEventListener('click', function(){
    // document.getElementById('add-money-section').style.display = "block";
    // document.getElementById('cashout-section').style.display = "none";
    toggle('add-money-section', "block");
    toggle('cashout-section', "none");
    toggle('transaction-section', "none");
})


document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    // const addAmountString = document.getElementById('add-amount').value;
    // const addAmount = parseFloat(addAmountString);
    const addAmount = getInputValueById('add-input-amount');    

    const pin = getInputValueById('add-input-pin');   

    const mainBalance = getInnerTextById('main-balance');  
    
    
    const accountNo = getInputValueById('add-input-account'); 
    
    const addTransaction = document.getElementById('transaction');

    const selectBank = document.getElementById('select').value;

    if(addAmount <= 0){
        alert('Amount must be greter than 0');
        return;
    }
    

    if(pin === 1234){
        const sum = mainBalance + addAmount;
        // document.getElementById('main-balance').innerText = sum;
        setInnerTextById('main-balance', sum);


        const p = document.createElement('p');
        p.innerText = `
            Money added as $ ${addAmount} from ${selectBank} account no.${accountNo}
        `;
        addTransaction.appendChild(p);
        
    }
    else{
        console.log('Wrong Pin');
    }
})