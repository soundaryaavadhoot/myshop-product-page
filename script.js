let unitsInput = document.getElementById("units");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {

    let units = Number(unitsInput.value);
    let bill = 0;
    let serviceCharge = 50;

    if (units <= 0) {
        result.innerHTML = `
            <div class="alert alert-danger">
                Please enter valid units.
            </div>
        `;
        return;
    }

    if (units <= 100) {
        bill = units * 5;
    }
    else if (units <= 200) {
        bill = units * 7;
    }
    else {
        bill = units * 10;
    }

    let finalAmount = bill + serviceCharge;

    console.log(finalAmount);
    

    result.innerHTML = `
        <div class="alert alert-success">
            <p><strong>Units:</strong> ${units}</p>
            <p><strong>Bill Amount:</strong> ₹${bill}</p>
            <p><strong>Service Charge:</strong> ₹${serviceCharge}</p>
            <hr>
            <h5><strong>Final Amount:</strong> ₹${finalAmount}</h5>
        </div>
    `;
});