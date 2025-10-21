
function getInputValueById(id){
    const valueString = document.getElementById(id).value;
    const value = parseFloat(valueString);
    return value;
}

function getInnerTextById(id){
    const valueString = document.getElementById(id).innerText;
    const value = parseFloat(valueString);
    return value;
}

function setInnerTextById(id, value){
    document.getElementById(id).innerText = value;
}

function toggle(id, status){
    document.getElementById(id).style.display = status;
}
    toggle('cashout-section', "none");
    toggle('transaction-section', "none"); 


