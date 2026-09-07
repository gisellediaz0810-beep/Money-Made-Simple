function calculateBudget() {
  const income = Number(document.getElementById("income").value) || 0;
  const needs = Number(document.getElementById("needs").value) || 0;
  const wants = Number(document.getElementById("wants").value) || 0;
  const savings = Number(document.getElementById("savings").value) || 0;

  const totalSpending = needs + wants + savings;
  const moneyLeft = income - totalSpending;

  let message = "";

  if (income === 0) {
    message = "Enter your monthly income to create your budget.";
  } else if (moneyLeft > 0) {
    message = "You have money left in your plan!";
  } else if (moneyLeft < 0) {
    message = "Your planned spending is higher than your income.";
  } else {
    message = "Your budget is balanced.";
  }

  document.getElementById("results").innerHTML = `
    <p>Total planned spending: <strong>$${totalSpending.toFixed(2)}</strong></p>
    <p>Money left: <strong>$${moneyLeft.toFixed(2)}</strong></p>
    <p>${message}</p>
  `;
}
