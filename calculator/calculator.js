window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount : 100000,
    years : 10,
    rate : 9
  };
  const amount = document.getElementById('loan-amount');
  const years = document.getElementById('loan-years');
  const rate = document.getElementById('loan-rate');
  amount.value = values.amount;
  years.value = values.years;
  rate.value = values.rate
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const recentValue = getCurrentUIValues();
updateMonthly(calculateMonthlyPayment(recentValue));// Is able to update the monthly payment 
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const years = parseFloat(values.years);
  const rate = parseFloat(values.rate) / 100;
  const amount = parseFloat(values.amount);
  const i = rate / 12;

  const n = years * 12;

  let firstPart = amount * i;  

  let secondPart = Math.pow(1 + i, -n); 

  let thirdPart = 1 - secondPart; 
  
  let finalResult = firstPart / thirdPart; 
  
  return Math.round(finalResult * 100) / 100; //Makes string to be able to have tow decimanl places
}
  //split it up into different sections and list variable for each result


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyValue = document.getElementById('monthly-payment');
  monthlyValue.innerText = '$' + monthly;

}
