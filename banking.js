function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalance = parseFloat(balanceTotalText);
    return newBalance;
}

function updateBalance(newDepositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    const newBalance = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = newBalance + newDepositAmount;
    }
    else {
        balanceTotal.innerText = newBalance - newDepositAmount;
    }

}


document.getElementById('button-submit').addEventListener('click', function () {

    const newDepositAmount = getInputValue('deposit-amount');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
});

// handle withdraw
document.getElementById('button-submited').addEventListener('click',
    function () {

        const newWithdrawAmount = getInputValue('withdraw-amount');
        const currentBalance = getCurrentBalance();
        if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
            updateTotalField('withdraw-total', newWithdrawAmount);
            updateBalance(newWithdrawAmount, false);
        }




    });