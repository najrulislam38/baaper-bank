// step-1: add event listener to ta deposit button.
document.getElementById("btn-deposit").addEventListener('click', function(){
    // step-2: get the deposit amount form the deposit input field.
    // for the input field .value to the value inside the input field.
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString)

    if (depositAmountString <= 0 || depositAmountString === "") {
       return alert ("please provide me Deposit Amount")
    }
    
    // step-3: get the current deposit amount total
    // for no-input (element other than input and textarea) use innerText get the text.
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step-4: add numbers to set the total deposit.
    depositTotalElement.innerText = previousDepositTotal + depositAmount;

    // step-5: get total current balance .
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    // step-6: add numbers to set the total balance.
    balanceTotalElement.innerText = balanceTotal + depositAmount;

    // step-7: clear the deposit field
    depositField.value = "" ;
})