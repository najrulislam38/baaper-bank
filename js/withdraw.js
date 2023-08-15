/*
1. add event handler with the withdraw button.
2. get the amount from the withdraw input field.
2-5. also make sure to convert the into number.
3. get previous withdrew total
4. calculate the withdraw amount
4-5. set the withdraw total
5. get the previous balance total
6. calculate the new balance total
7. clear the input field.
*/

// step-1
document.getElementById("btn-withdrew").addEventListener("click", function () {
  // step 2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step 3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step 5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step 7
  withdrawField.value = "";

  if (newWithdrawAmount <= 0 || newWithdrawAmountString === "") {
    return alert("please provide me Withdraw Amount");
  } else if (newWithdrawAmount > previousBalanceTotal) {
    return alert("You cant withdraw that much");
  } else {
    // step 4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 6
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
  }
});
