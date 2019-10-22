    // This calculates your monthly mortgage payments when given financial information


    let purchasePrice = prompt('Enter purchase price');
    let downPayment = prompt('Enter your down payment:');
    let loanLength = Number(prompt('Is your loan length 15 yrs or 30 yrs?'));
    let interestRate = prompt('What is the interest rate?');
  

function calcMortgage (purchasePrice, downPayment, loanLength, interestRate){
    //dealing with interest rate
    let monthlyInterest = (interestRate/100) / 12;
    
    if (loanLength === 15 || loanLength === 30){
        monthlyPayments = 12 * loanLength;
    }
    else{
        return alert('Please enter 15 or 30');
    }

    let insurance = 2036 / 12;
    let propertyTax = 1120 /12;

    let formula = (1 + monthlyInterest)**monthlyPayments * monthlyInterest;
    let minusOne = formula - 1;

    let totalPrice = purchasePrice - downPayment + insurance + propertyTax;

    
    let monthMortgage = totalPrice/100;
    
    return alert(`Your monthly mortgage payments is: $ ${monthMortgage}`);
    
}
calcMortgage(purchasePrice, downPayment,
    loanLength, interestRate);