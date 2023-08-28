const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonDiscount = document.querySelector("#addDiscount");
buttonDiscount.addEventListener("click", showDiscount);

function showDiscount(e) {
    e.preventDefault(); 
    document.querySelector(".discount").classList.toggle('showDiscount');
}

function calculateAmount(e) {
    e.preventDefault(); 
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    let tip = document.querySelector("#tipPercent").value;
    const discount = document.querySelector(".discount").value;

    let amountPerPerson = bill / people;
    let discountPerPerson = (bill * discount) / people;
    let tipPerPerson = (bill * tip / 100) / people;
    let totalSum = amountPerPerson + tipPerPerson - discountPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    discountPerPerson = discountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector('#dividedDiscount').textContent = discountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalSum;

    if (bill === "" || people === "" || people < 1) {
        Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'You must enter at least the bill amount and number of people',
        });
        document.querySelector("#dividedBill").textContent = '00.00';
        document.querySelector('#dividedDiscount').textContent = '00.00';
        document.querySelector("#dividedTip").textContent = '00.00';
        document.querySelector("#billAndTip").textContent = '00.00';
    }

    if (tip === "") {
        tip = 0;
    }

}
