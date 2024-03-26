// ********** Raccolta dati **********
const km = document.getElementById('km');
kmValue = parseInt(km.value);
// debug
console.log(km);
console.log(kmValue);

const age = document.getElementById("age");
ageValue = parseInt(age.value);
// debug
console.log(age);
console.log(ageValue);

const sendBtn = document.getElementById("submit");
// debug
console.log(sendBtn);

// ********** Esecuzione logica **********

//Claculation normal ticket
let ticket = kmValue * 0.21;
//Calculation discounted ticket
let discount = 0;
console.log(discount, "discount");

let discountApplied = 0;
console.log(discountApplied, "discountApplied");

let priceDiscounted = 0;
console.log(priceDiscounted, "priceDiscounted");

sendBtn.addEventListener("click", function(){
    if (ageValue >= 65) {
        discount = 40;
    } else if (ageValue < 18) {
        discount = 20;
    }

    // ********** Output **********
    if (ageValue >= 65 || ageValue < 18) {
        console.log(priceDiscounted);   
        discountApplied = (ticket * discount) / 100;
        console.log(discountApplied, "discountApplied");

        priceDiscounted = ticket - discountApplied;
        console.log(priceDiscounted, "priceDiscounted"); 
    } else {
        console.log(ticket);
        discountApplied = (ticket * discount) / 100;
        console.log(discountApplied, "discountApplied");

        priceDiscounted = ticket - discountApplied;
        console.log(priceDiscounted, "priceDiscounted");
    }
});