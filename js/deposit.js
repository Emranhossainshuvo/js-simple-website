document.getElementById('button-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    const depositTotalElement = document.getElementById('deposit-amount');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotalString + newDepositAmountString;
    depositTotalElement.innerText = currentDepositTotal;
    depositField.value = '';
    console.log(typeof previousDepositTotal);
})