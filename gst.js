// Input Fields
const priceInput = document.getElementById("price");
const feeInput = document.getElementById("fee");
const govtFeeInput = document.getElementById("govt-fee");
const gstInput = document.getElementById("gst");
const totalInput = document.getElementById("total");

// Buttons
const clearBtn = document.getElementById("clear-btn");

document.querySelectorAll('input[type="number"]').forEach(input => {

    input.addEventListener("wheel", (event) => {
        event.target.blur();
    });

});

function calculateFromPayment() {

    const payment = Number(priceInput.value) || 0;
    const governmentFee = Number(govtFeeInput.value) || 0;

    const professionalFee = payment - governmentFee;
    const gst = professionalFee * 0.18;
    const total = payment + gst;

    feeInput.value = professionalFee.toFixed(2);
    gstInput.value = gst.toFixed(2);
    totalInput.value = total.toFixed(2);

}

function calculateFromProfessionalFee() {

    const professionalFee = Number(feeInput.value) || 0;
    const governmentFee = Number(govtFeeInput.value) || 0;

    const payment = professionalFee + governmentFee;
    const gst = professionalFee * 0.18;
    const total = payment + gst;

    priceInput.value = payment.toFixed(2);
    gstInput.value = gst.toFixed(2);
    totalInput.value = total.toFixed(2);

}

function calculateFromGST() {
    const governmentFee = Number(govtFeeInput.value) || 0;
    const gst = Number(gstInput.value) || 0;

    const professionalFee = gst / 0.18;
    const payment = professionalFee + governmentFee;
    const total = payment + gst;

    feeInput.value = professionalFee.toFixed(2);
    priceInput.value = payment.toFixed(2);
    totalInput.value = total.toFixed(2);

}

function calculateFromTotal() {
    const governmentFee = Number(govtFeeInput.value) || 0;
    const total = Number(totalInput.value) || 0;

    const professionalFee = (total - governmentFee)/1.18;
    const payment = professionalFee + governmentFee;
    const gst = professionalFee * 0.18;

    feeInput.value = professionalFee.toFixed(2);
    priceInput.value = payment.toFixed(2);
    gstInput.value = gst.toFixed(2);

}

priceInput.addEventListener("input", calculateFromPayment);

feeInput.addEventListener("input", calculateFromProfessionalFee);

govtFeeInput.addEventListener("input", calculateFromProfessionalFee);

gstInput.addEventListener("input", calculateFromGST);

totalInput.addEventListener("input", calculateFromTotal);

clearBtn.addEventListener('click', () => {
    document.querySelectorAll('input[type="number"]').forEach(input => {

    input.value = '';

});
})