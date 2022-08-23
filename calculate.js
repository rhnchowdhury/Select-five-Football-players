
function playerCost() {
    const perPlayerCost = document.getElementById('player-cost');
    const totalPlayerCostString = perPlayerCost.value * cartArray.length;
    const totalPlayerCost = parseFloat(totalPlayerCostString);
    const showPlayerExpense = document.getElementById('total-player-expense');
    showPlayerExpense.innerText = totalPlayerCost;

    const managerCost = document.getElementById('manager-cost');
    const managerAmountString = managerCost.value;
    const managerAmount = parseFloat(managerAmountString);

    const coachCost = document.getElementById('coach-cost');
    const coachAmountString = coachCost.value;
    const coachAmount = parseFloat(coachAmountString);

    const totalExpense = totalPlayerCost + managerAmount + coachAmount;

    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = totalExpense;
}

function totalCost() {
    playerCost();
}


