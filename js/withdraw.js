document.getElementById('button-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('Withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    
    const withdrawTotalElement = document.getElementById('withdraw-amount');
    const withdrawTotalPreviousString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalPreviousString);
    

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalAmount = document.getElementById('old-balance');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalAmount.innerText = newBalanceTotal;


    withdrawField.value = '';
})